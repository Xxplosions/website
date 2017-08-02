import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Import components
import { HomeComponent } from './home/home.component';
import { CommunityComponent } from './community/community.component';
import { HighlightsComponent } from './highlights/highlights.component';
import { LiveComponent } from './live/live.component';
import { AboutComponent } from './about/about.component';
import { CharityComponent } from './charity/charity.component';
import { ScheduleComponent } from './schedule/schedule.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "community", component: CommunityComponent},
  {path: "highlights", component: HighlightsComponent},
  {path: "live", component: LiveComponent},
  {path: "schedule", component: ScheduleComponent},
  {path: "charity", component: CharityComponent},
  {path: "about", component: AboutComponent}
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class RoutingModule { }