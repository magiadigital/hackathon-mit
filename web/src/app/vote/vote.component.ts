import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.scss']
})
export class VoteComponent implements OnInit {

  id: any;
  info: string;
  parties = [
    {
      title: 'Party 1',
      candidate: 'keiko.jpg',
      candidate_alt: 'Candidate\'s Name',
      party: 'keiko.jpg',
      party_alt: 'Party\'s Name'
    }, {
      title: 'Party 2',
      candidate: 'keiko.jpg',
      candidate_alt: 'Candidate\'s Name',
      party: 'keiko.jpg',
      party_alt: 'Party\'s Name'
    }, {
      title: 'Party 3',
      candidate: 'keiko.jpg',
      candidate_alt: 'Candidate\'s Name',
      party: 'keiko.jpg',
      party_alt: 'Party\'s Name'
    }, {
      title: 'Party 4',
      candidate: 'keiko.jpg',
      candidate_alt: 'Candidate\'s Name',
      party: 'keiko.jpg',
      party_alt: 'Party\'s Name'
    }, {
      title: 'Party 5',
      candidate: 'keiko.jpg',
      candidate_alt: 'Candidate\'s Name',
      party: 'keiko.jpg',
      party_alt: 'Party\'s Name'
    }, {
      title: 'Party 6',
      candidate: 'keiko.jpg',
      candidate_alt: 'Candidate\'s Name',
      party: 'keiko.jpg',
      party_alt: 'Party\'s Name'
    }, {
      title: 'Party 7',
      candidate: 'keiko.jpg',
      candidate_alt: 'Candidate\'s Name',
      party: 'keiko.jpg',
      party_alt: 'Party\'s Name'
    }, {
      title: 'Party 8',
      candidate: 'keiko.jpg',
      candidate_alt: 'Candidate\'s Name',
      party: 'keiko.jpg',
      party_alt: 'Party\'s Name'
    }, {
      title: 'Party 9',
      candidate: 'keiko.jpg',
      candidate_alt: 'Candidate\'s Name',
      party: 'keiko.jpg',
      party_alt: 'Party\'s Name'
    }, {
      title: 'Party 10',
      candidate: 'keiko.jpg',
      candidate_alt: 'Candidate\'s Name',
      party: 'keiko.jpg',
      party_alt: 'Party\'s Name'
    }, {
      title: 'Party 11',
      candidate: 'keiko.jpg',
      candidate_alt: 'Candidate\'s Name',
      party: 'keiko.jpg',
      party_alt: 'Party\'s Name'
    }, {
      title: 'Party 12',
      candidate: 'keiko.jpg',
      candidate_alt: 'Candidate\'s Name',
      party: 'keiko.jpg',
      party_alt: 'Party\'s Name'
    }, {
      title: 'Party 13',
      candidate: 'keiko.jpg',
      candidate_alt: 'Candidate\'s Name',
      party: 'keiko.jpg',
      party_alt: 'Party\'s Name'
    }
  ];

  selectedCandidate: any;

  constructor(
    private route: ActivatedRoute,
    private goto: Router
  ) {
    this.route.params.subscribe( params => {
      console.log(params.id);
      this.id = params.id;
  });
  }

  ngOnInit() {
    if (this.id !== 'null') {
      this.selectedCandidate = this.parties[this.id];
      this.info = 'You selected this candidate, if you agree, press the "Vote" button';
    } else {
      this.info = 'You selected a blank vote, if you agree, press the "Vote" button';
    }
  }
  vote() {
    this.goto.navigate(['/finish']);
  }
}
