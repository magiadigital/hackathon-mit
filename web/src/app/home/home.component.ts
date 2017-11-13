import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import {SharingService} from '../sharing.service';
import {DataService} from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public citizen;
  public parties = [];

  constructor(
    private router: Router,
    private authservice: AuthService,
    private sharing: SharingService,
    private data: DataService
  ) { }

  ngOnInit() {
    this.sharing.setLoader(true);
    this.citizen = this.authservice.getLocalCitizen();
    console.log(this.citizen);
    this.data.getCandidatos().toPromise()
      .then(candidates => {
        for (let i = 0; i < candidates.length; i++) {
          const candidato = {
            datos: null,
            partido: null,
            $class: candidates[i].$class,
            dni: candidates[i].dni
          };
          this.data.getCiudadanoByCandidato(candidates[i]).toPromise().then(citizens => {
            if (citizens.length > 0) {
              candidato.datos = citizens[0];
              this.data.getPartidoByCandidato(candidates[i]).toPromise().then( partidos => {
                if (partidos.length > 0) {
                  candidato.partido = partidos[0];
                }
                this.parties.push(candidato);
                if ((i + 1) === candidates.length) {
                  this.sharing.setCandidates(this.parties);
                  this.sharing.setLoader(false);
                }
              });
            }
          });
        }
      });
  }
  public continue(event) {
    console.log(event);

    this.router.navigate(['/candidatesList']);
  }
}
