import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AuthModule} from "@auth0/auth0-angular";
import {environment} from "../environments/environment";

const urlSearchParams = new URLSearchParams(window.location.search);
let appName = urlSearchParams.get('appName');

if (appName) {
  window.localStorage.setItem('appName', appName);
}

if (!appName) {
  const restoredAppName = window.localStorage.getItem('appName');
  urlSearchParams.set('appName', restoredAppName || 'hamidev-nodejs-8324-src');
  const newRelativePathQuery = window.location.pathname + '?' + urlSearchParams.toString();
  history.pushState(null, '', newRelativePathQuery);
}

appName = urlSearchParams.get('appName');

console.log('the appName is: ', appName);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AuthModule.forRoot({
      domain: environment[appName].auth0_domain,
      clientId: environment[appName].auth0_client_id,
      audience: environment[appName].auth0_audience,
      redirectUri: window.location.origin + window.location.pathname
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
