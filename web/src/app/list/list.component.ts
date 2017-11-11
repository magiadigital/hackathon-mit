import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { OwlCarousel } from 'ngx-owl-carousel';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @ViewChild('owlElement') owlElement: OwlCarousel;

  public partiesInColumn = 3;

  public selectedParty = -1;
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
  parties2d = [];
  constructor(
    private router: Router
  ) { }

  ngOnInit() {

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
  }

  selectParty(i) {
    if (i !== -2) {
      if (this.selectedParty !== i) {
        this.selectedParty = i;
        console.log(i);
      } else {
        this.router.navigate(['/votes/', i]);
      }
    } else {
      this.router.navigate(['/votes/', 'null']);
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

}
