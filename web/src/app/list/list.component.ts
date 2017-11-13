import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { OwlCarousel } from 'ngx-owl-carousel';
import {SharingService} from '../sharing.service';
import {DataService} from '../data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @ViewChild('owlElement') owlElement: OwlCarousel;

  public partiesInColumn = 3;

  public selectedParty = -1;
  parties = [];
  parties2d = [];
  constructor(
    private router: Router,
    private sharing: SharingService,
    private data: DataService
  ) {}

  ngOnInit() {
    this.getCandidates();
  }

  selectParty(i) {
    if (i !== -2) {
      if (this.selectedParty !== i) {
        this.selectedParty = i;
        console.log(i);
      } else {
        this.sharing.setSelectedCandidate(this.parties[i]);
        this.router.navigate(['/votes/']);
      }
    } else {
      this.router.navigate(['/votes/']);
    }
  }

  chooseParty(i) {
    if (this.selectedParty !== -1) {
      if (this.selectedParty === i) {
        return 'selected';
      } else {
        return 'notselected';
      }
    } else {
      return '';
    }
  }

  prev() {
    this.owlElement.previous();
  }
  next() {
    this.owlElement.next();
  }
  getCandidates() {
    this.sharing.setLoader(true);
    this.data.getCandidatos().toPromise()
      .then(candidates => {
        for (let i = 0; i < candidates.length; i++) {
          const candidato = {
            datos: null,
            partido: null
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
                  let index = 0;
                  for (let columnId = 0; columnId < this.parties.length / this.partiesInColumn; columnId++) {
                    const row = [];
                    for (let innerId = 0; innerId < this.partiesInColumn && index < this.parties.length; innerId++) {
                      const item = this.parties[index];
                      row.push(item);
                      index++;
                    }
                    this.parties2d.push(row);
                  }
                  this.sharing.setLoader(false);
                }
              });
            }
          });
        }
      })
      .catch(error => console.log('Error: ', error));
  }

}
