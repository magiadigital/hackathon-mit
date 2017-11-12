import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RoutingModule } from './routing/routing.module';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { OwlModule } from 'ngx-owl-carousel';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ListComponent } from './list/list.component';
import { VoteComponent } from './vote/vote.component';
import { FinishComponent } from './finish/finish.component';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import {SharingService} from './sharing.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ListComponent,
    VoteComponent,
    FinishComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    RoutingModule,
    AngularFontAwesomeModule,
    OwlModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    SharingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
