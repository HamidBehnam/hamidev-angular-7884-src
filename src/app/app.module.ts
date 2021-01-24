import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AuthModule} from "@auth0/auth0-angular";
import {environment} from "../environments/environment";
import {RouterModule, Routes} from '@angular/router';
import { SectionComponent } from './section/section.component';

// const urlSearchParams = new URLSearchParams(window.location.search);
// let appName = urlSearchParams.get('appName');
//
// if (!appName) {
//   urlSearchParams.set('appName', 'hamidev-nodejs-8324-src');
//   const newRelativePathQuery = window.location.pathname + '?' + urlSearchParams.toString();
//   history.pushState(null, '', newRelativePathQuery);
// }
//
// appName = urlSearchParams.get('appName');
//
// console.log('the appName is: ', appName);

const routes: Routes = [
  {
    path: 'section',
    component: SectionComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    SectionComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AuthModule.forRoot({
      domain: environment.auth0_domain,
      clientId: environment.auth0_client_id,
      audience: environment.auth0_audience
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
