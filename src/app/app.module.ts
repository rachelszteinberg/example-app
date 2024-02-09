/* JavaScript imports */
import { BrowserModule } from '@angular/platform-browser';
import {
  CUSTOM_ELEMENTS_SCHEMA,
  NO_ERRORS_SCHEMA,
  NgModule,
} from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { HomeOverviewComponent } from './home-overview/home-overview.component';
import { PatientPageComponent } from './patient-page/patient-page.component';
import { SystemPortalComponent } from './system-portal/system-portal.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

/* the AppModule class with the @NgModule decorator */
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeOverviewComponent,
    PatientPageComponent,
    SystemPortalComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, InfiniteScrollModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class AppModule {}
