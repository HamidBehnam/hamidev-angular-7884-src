import { Component } from '@angular/core';
import {AuthService} from '@auth0/auth0-angular';
import jwt_decode from "jwt-decode";
import {RedirectLoginOptions} from '@auth0/auth0-spa-js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hamidev-angular-src';
  accessToken: string;
  accessTokenDecoded: any;
  redirectLoginOptions: RedirectLoginOptions;

  constructor(public authService: AuthService) {
    this.authService.user$.subscribe(user => {
      console.log(user);
    });

    console.log(window.location);

    this.redirectLoginOptions = {
      redirect_uri: window.location.origin,
      appState: {
        theName: "Hamid",
        theCode: 234
      }
    };
  }

  async getAccessToken() {
    this.authService.getAccessTokenSilently({
      ignoreCache: true
    }).subscribe(token => {
      this.accessToken = token;
      this.accessTokenDecoded = jwt_decode(this.accessToken);
    });
  }
}
