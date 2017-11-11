import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from '../login/login.component';
import { HomeComponent } from '../home/home.component';
import { ListComponent } from '../list/list.component';
import { VoteComponent } from '../vote/vote.component';
import { FinishComponent } from '../finish/finish.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'candidatesList', component: ListComponent },
  { path: 'votes/:id', component: VoteComponent },
  { path: 'finish', component: FinishComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})

export class RoutingModule { }
