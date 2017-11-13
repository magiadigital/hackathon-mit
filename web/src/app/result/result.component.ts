import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

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

  best = [];
  others = [];

  constructor() { }

  ngOnInit() {
    this.best.push(this.parties[0]);
    this.best.push(this.parties[1]);
    this.best.push(this.parties[2]);

    for (let i = 2; i < this.parties.length; i++) {
      this.others.push(this.parties[i]);
    }
  }

}
