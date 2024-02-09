import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientPageComponent } from './patient-page/patient-page.component';
import { HomeOverviewComponent } from './home-overview/home-overview.component';
import { SystemPortalComponent } from './system-portal/system-portal.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeOverviewComponent },
  { path: 'patient-portal', component: PatientPageComponent },
  { path: 'system-portal', component: SystemPortalComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabledBlocking',
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      onSameUrlNavigation: 'reload',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
