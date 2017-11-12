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

    this.authservice.setUser(event.target.elements[0].value);
    this.authservice.setPassword(event.target.elements[1].value);

    /*this.citizenList.forEach(element => {
      if (event.target.elements[0].value === element.dni ||  event.target.elements[0].value === element.clave) {
        this.authservice.getLedgerCiudadano().toPromise()
        .then((data) => {
          data.array.forEach(item => {
              if (item.ciudadano === element.dni) {
                hasVoted = true;
              }
            });
          })
          .then(() => {
            this.authservice.setHasvoted(hasVoted);
          })
          .catch(error => console.log('Error: ', error));
        }
        this.router.navigate(['/home']);
    });
*/

    this.router.navigate(['/home']);
  }
}
