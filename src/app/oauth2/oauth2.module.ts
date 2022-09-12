import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {
    NbCardModule,
    NbLayoutModule,
} from '@nebular/theme';

import { OAuth2LoginComponent } from './oauth2-login.component';
import { OAuth2CallbackComponent } from './oauth2-callback.component';
import { Oauth2RoutingModule } from './oauth2-routing.module';
import { NbAuthModule, NbOAuth2AuthStrategy, NbOAuth2ResponseType } from '@nebular/auth';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        NbCardModule,
        NbLayoutModule,
        Oauth2RoutingModule,
        NbAuthModule.forRoot({
            strategies: [
                NbOAuth2AuthStrategy.setup({
                    name: 'google',
                    clientId: '402783797469-qhege00rbsh0bi5sri003bpaei711u3m.apps.googleusercontent.com',
                    clientSecret: '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',
                    authorize: {
                        endpoint: 'https://accounts.google.com/o/oauth2/v2/auth',
                        responseType: NbOAuth2ResponseType.TOKEN,
                        scope: 'https://www.googleapis.com/auth/userinfo.profile',
                        redirectUri: 'http://localhost:4200/login/callback',
                    },
                    redirect: {
                        success: '/pages/layout/stepper',
                    },
                }),
            ],
        }),
    ],
    declarations: [
        OAuth2LoginComponent,
        OAuth2CallbackComponent
    ],
})
export class OAuth2Module {
}