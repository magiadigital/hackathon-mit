import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {SharingService} from '../sharing.service';
import {DataService} from '../data.service';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.scss']
})
export class VoteComponent implements OnInit {

  id: any;
  info: string;
  election: any;
  voto = {
    eleccion: null,
    candidato: null,
    ciudadano: null,
    idVoto: null,
    idLCI: null
  };
  citizen: any;

  selectedCandidate: any;

  constructor(
    private route: ActivatedRoute,
    private goto: Router,
    private sharing: SharingService,
    private data: DataService,
    private auth: AuthService
  ) {
    this.route.params.subscribe( params => {
      console.log(params.id);
      this.id = params.id;
  });
  }

  ngOnInit() {
    this.sharing.setLoader(true);
    this.data.getActiveElection().toPromise().then(election => {
      this.sharing.setLoader(false);
      if (election.length > 0) {
        this.election = election[0];
      }
      this.citizen = this.auth.getLocalCitizen();
      if (this.sharing.getSelectedCandidate() !== null) {
        this.selectedCandidate = this.sharing.getSelectedCandidate();
        this.info = 'You selected this candidate, if you agree, press the "Vote" button';
      } else {
        this.info = 'You selected a blank vote, if you agree, press the "Vote" button';
      }
    });
  }
  vote() {
    this.sharing.setLoader(true);
    this.voto.eleccion = this.election.$class + '#' + this.election.nombre;
    this.voto.candidato = this.selectedCandidate.$class + '#' + this.selectedCandidate.dni;
    this.voto.ciudadano = this.citizen.$class + '#' + this.citizen.dni;
    this.voto.idVoto = Math.floor(Math.random() * (253467897 / 32445));
    this.voto.idLCI = Math.floor(Math.random() * (38452364536 / 23525));
    this.data.vote(this.voto).toPromise().then(response => {
      this.sharing.setLoader(false);
      alert('Your vote has been submitted successfully');
      this.goto.navigate(['/finish']);
    });
  }
}
