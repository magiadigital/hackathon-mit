import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-finish',
  templateUrl: './finish.component.html',
  styleUrls: ['./finish.component.scss']
})
export class FinishComponent implements OnInit {

  constructor(
    private route: Router
  ) { }

  ngOnInit() {
  }
  new() {
    this.route.navigate(['']);
  }
}
