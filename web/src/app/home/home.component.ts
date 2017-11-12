import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public citizen;

  constructor(
    private router: Router,
    private authservice: AuthService
  ) { }

  ngOnInit() {
    this.citizen = this.authservice.getLocalCitizen();
    console.log(this.citizen);
  }
  public continue(event) {
    console.log(event);

    this.router.navigate(['/candidatesList']);
  }
}
