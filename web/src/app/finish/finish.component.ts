import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {DataService} from '../data.service';
import {SharingService} from '../sharing.service';

@Component({
  selector: 'app-finish',
  templateUrl: './finish.component.html',
  styleUrls: ['./finish.component.scss']
})
export class FinishComponent implements OnInit {

  candidates = [];
  candidatesAndTotal = [];
  constructor(
    private route: Router,
    private sharing: SharingService,
    private data: DataService
  ) { }

  ngOnInit() {
  }
  new() {
    this.route.navigate(['']);
  }
}
