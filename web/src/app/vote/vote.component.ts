import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {SharingService} from '../sharing.service';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.scss']
})
export class VoteComponent implements OnInit {

  id: any;
  info: string;

  selectedCandidate: any;

  constructor(
    private route: ActivatedRoute,
    private goto: Router,
    private sharing: SharingService
  ) {
    this.route.params.subscribe( params => {
      console.log(params.id);
      this.id = params.id;
  });
  }

  ngOnInit() {
    if (this.id !== 'null') {
      this.selectedCandidate = this.sharing.getSelectedCandidate();
      this.info = 'You selected this candidate, if you agree, press the "Vote" button';
    } else {
      this.info = 'You selected a blank vote, if you agree, press the "Vote" button';
    }
  }
  vote() {
    this.goto.navigate(['/finish']);
  }
}
