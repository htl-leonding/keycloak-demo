import { Injectable } from '@angular/core';
import {authCodeFlowConfig} from "./auth-config";
import { OAuthService } from 'angular-oauth2-oidc';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private oauthService: OAuthService) { }

  init() {
    this.oauthService.configure(authCodeFlowConfig);
    this.oauthService.loadDiscoveryDocumentAndTryLogin().then(
      () => {
        if (this.oauthService.hasValidAccessToken()) {
          this.oauthService.setupAutomaticSilentRefresh();
        }
      }
    );
  }

  login() {
    this.oauthService.initLoginFlow();
  }

}
