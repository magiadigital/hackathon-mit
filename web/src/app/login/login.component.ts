import { AuthService } from '../auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as CryptoJS from 'crypto-js';

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

  public loginuser() {
    let hasVoted = false;
    if (this.dni !== null && this.pass !== null) {
      this.authservice.getCitizenByDni(this.dni).subscribe(citizen => {
        if (citizen !== null) {
          if (CryptoJS.AES.decrypt(citizen.clave, '' + this.pass).toString(CryptoJS.enc.Utf8) === this.pass) {
            this.authservice.setLocalCitizen({ dni: citizen.dni, nombres: citizen.nombres, apellidos: citizen.apellidos, imgUrl: citizen.imgUrl, $class: citizen.$class });
            this.authservice.setCitizenExits(true);
            this.authservice.getLedgerCiudadano().toPromise()
              .then((data) => {
                data.forEach(item => {
                  if (item.ciudadano.split('#')[1] === this.dni) {
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
            this.router.navigate(['/finish']);
          } else {
            alert('Incorrect password');
          }
        } else {
          alert('Citizen not found');
        }
      }, error => console.log(error));
    } else {
      alert('Please enter ID and Password');
    }
  }
}
//
