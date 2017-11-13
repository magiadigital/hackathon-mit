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
    this.data.getCandidatesLedgers().subscribe(ledgers => {
      this.best.push(ledgers[0]);
      this.best.push(ledgers[1]);
      this.best.push(ledgers[2]);

      for (let i = 2; i < ledgers.length; i++) {
        this.others.push(ledgers[i]);
      }
      this.sharing.setLoader(false);
    });
  }

}
