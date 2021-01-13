import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AuthModule} from "@auth0/auth0-angular";
import {environment} from "../environments/environment";

const urlSearchParams = new URLSearchParams(window.location.search);
let appName = urlSearchParams.get('appName');

if (!appName) {
  urlSearchParams.set('appName', 'hamidev-nodejs-8324-src');
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
      redirectUri: environment[appName].auth0_redirect_uri
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
