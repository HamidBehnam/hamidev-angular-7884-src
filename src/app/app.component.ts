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
  }

  loginWithRedirect(): any {
    console.log(window.location.origin + window.location.pathname);

    const thePath = window.location.pathname + '?' + window.location.search;

    console.log('the path is: ', thePath);

    this.authService.loginWithRedirect({
      appState: {
        target: thePath
      }
    });
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
