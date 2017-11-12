import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { log } from 'util';

@Injectable()
export class AuthService {

  private _actionUrl = 'http://190.81.160.212:3000/api/';

  private _user: string;
  private _password: string;

  constructor(
    private http: Http
  ) { }

  setUser (user: string) {
    this._user = user;
  }
  setPassword (pwd: string) {
    this._password = pwd;
  }

  isLoggedin() {
    this.getCitizen().subscribe(
      data => {
        data.forEach(element => {
          if (this._user === element.dni &&  this._password === element.clave) {
            console.log('si');
            this.getLedgerCiudadano().subscribe(
              lc => {
                console.log('LC : ', lc);
                lc.forEach(item => {
                    if (item.ciudadano === element.dni) {
                      return false;
                    }
                    return true;
                  });
                }
            );
            }
          });
        },
        error => {
          console.log('Error: ', error);
        },
        () => {console.log('nose');}
    );

  }
  public getCitizen() {
    const url = this._actionUrl + 'Ciudadano';
    return this.http.get(url).map((res: Response) => res.json());
  }
  public getLedgerCiudadano() {
    const url = this._actionUrl + 'LedgerCiudadano';
    return this.http.get(url).map((res: Response) => res.json());
  }
}
