import { AuthService } from '../auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as CryptoJS from 'crypto-js';
import {WordArray} from 'crypto-js';
import {log} from "util";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private citizenList: any;
  public pass: String;
  public dni: String;

  constructor(
    private router: Router,
    private authservice: AuthService
  ) {
    this.authservice.getCitizen().toPromise()
      .then(data => {
        this.citizenList = data;
      })
      .catch(error => console.log('Error: ', error));
  }

  ngOnInit() {}

  public loginuser(event) {
    let hasVoted = false;
    if (event.target.elements[0].value !== null && event.target.elements[1].value !== null) {
      this.authservice.getCitizenByDni(event.target.elements[0].value).toPromise().then(citizen => {
        if (citizen !== null) {
          console.log('citizen: ', citizen);
          if (CryptoJS.AES.decrypt(citizen.clave, '' + event.target.elements[1].value).toString(CryptoJS.enc.Utf8) === this.pass) {
            this.authservice.setLocalCitizen({ dni: citizen.dni, nombres: citizen.nombres, apellidos: citizen.apellidos, imgUrl: citizen.imgUrl, $class: citizen.$class });
            this.authservice.setCitizenExits(true);
            this.authservice.getLedgerCiudadano().toPromise()
              .then((data) => {
                data.array.forEach(item => {
                  if (item.ciudadano === this.dni) {
                    hasVoted = true;
                  }
                });
                if (!hasVoted) {
                  this.authservice.setHasvoted(hasVoted);
                  this.router.navigate(['/home']);
                }
              })
              .catch(error => console.log('Error: ', error));
            this.authservice.setHasvoted(hasVoted);
            this.router.navigate(['/home']);
          } else {
            alert('Incorrect password');
          }
        } else {
          alert('Citizen not found');
        }
      });
    } else {
      alert('Please enter ID and Password');
    }
  }
}
