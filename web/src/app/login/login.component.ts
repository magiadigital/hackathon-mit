import { AuthService } from '../auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private citizenList: any;

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

  ngOnInit() {
  }

  public loginuser(event) {
    let hasVoted = false;
    this.authservice.getVotation().toPromise()
      .then(votation => {
        if(votation.estado === 'activa') {
          this.authservice.setVotation(true);
          this.citizenList.forEach(element => {
            if (event.target.elements[0].value === element.dni ||  event.target.elements[0].value === element.clave) {
              this.authservice.setLocalCitizen({ dni: element.dni, nombres: element.nombres, apellidos: element.apellidos, imgUrl: element.imgUrl });
              this.authservice.setCitizenExits(true);
              this.authservice.getLedgerCiudadano().toPromise()
              .then((data) => {
                data.array.forEach(item => {
                  if (item.ciudadano === element.dni) {
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
            }
          });
        }
      })
    .catch(error => console.log('Error: ', error) );
  }
}
