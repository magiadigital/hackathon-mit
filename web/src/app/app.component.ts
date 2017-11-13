import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public myDate;
  public votation = {
    nombre: "",
    periodo: "",
    inicio: "",
    fin: "",
    estado: ""
  }

  constructor(
    private authservice: AuthService
  ) {
    setInterval(() => {
      this.myDate = new Date();
    }, 3600);

    this.authservice.getVotation().toPromise()
      .then(data => {
        this.votation = data;
    })
    .catch(error => {
      console.log('Error: ', error);
    })
  }
}
