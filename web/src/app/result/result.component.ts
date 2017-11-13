import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import {SharingService} from '../sharing.service';
import {DataService} from '../data.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  candidates = [];
  candidatesAndTotal = [];
  best = [];
  others = [];

  constructor(
    private authservice: AuthService,
    private data: DataService,
    private sharing: SharingService
  ) { this.setResults(); }

  ngOnInit() {
  }
  setResults() {
    this.sharing.setLoader(true);
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
                this.candidates.push(candidato);
                if ((i + 1) === candidates.length) {
                  this.data.getCandidatesLedgers().subscribe(ledgers => {
                    ledgers.forEach(ledger => {
                      this.candidates.forEach(candidate => {
                        if (ledger.candidato.split('#')[1] === candidate.dni) {
                          candidate.ledger = ledger;
                        }
                      });
                    });
                    this.candidates = this.sortArray(this.candidates);
                    this.best.push(this.candidates[0]);
                    this.best.push(this.candidates[1]);
                    this.best.push(this.candidates[2]);

                    for (let j = 3; j < this.candidates.length; j++) {
                      this.others.push(this.candidates[j]);
                    }
                    this.sharing.setLoader(false);
                  });
                }
              });
            }
          });
        }
      });
  }
  sortArray(array) {
    array.sort((a: any, b: any) => {
      if (a.ledger.total > b.ledger.total) {
      return -1;
      } else if (a.ledger.total < b.ledger.total) {
      return 1;
      } else {
      return 0;
      }
    });
    return array;
  }

}
