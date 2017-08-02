import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RoutingModule } from './routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './header/nav/nav.component';
import { CommunityComponent } from './community/community.component';
import { HighlightsComponent } from './highlights/highlights.component';
import { LiveComponent } from './live/live.component';
import { AboutComponent } from './about/about.component';
import { CharityComponent } from './charity/charity.component';
import { ScheduleComponent } from './schedule/schedule.component';


@NgModule({
  imports: [
    BrowserModule,
    RoutingModule,
    NgbModule.forRoot()
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    NavComponent,
    LiveComponent,
    CommunityComponent,
    HighlightsComponent,
    AboutComponent,
    CharityComponent,
    ScheduleComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
