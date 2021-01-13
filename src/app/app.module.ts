import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AuthModule} from "@auth0/auth0-angular";
import {environment} from "../environments/environment";

const urlSearchParams = new URLSearchParams(window.location.search);
const appName = urlSearchParams.get('appName');

if (!appName) {
  urlSearchParams.set('appName', 'hamidev-nodejs-8324-src');
  window.location.search = urlSearchParams.toString();
}

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
      audience: environment[appName].auth0_audience
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
