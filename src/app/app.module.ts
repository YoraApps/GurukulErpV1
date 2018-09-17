/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './@core/core.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ThemeModule } from './@theme/theme.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ButtonViewComponent } from './pages/settings/popupbranch/popupbranch.component';
import { AuthGuardService } from './auth/auth-guard.service';
import { AuthService } from './auth/auth.service';
import { ReviewButtonViewComponent } from './pages/admission/reviewand-approve/reviewand-approve.component';
import {ModalComponent} from './pages/ui-features/modals/modal/modal.component'
@NgModule({
  declarations: [AppComponent, ButtonViewComponent,ReviewButtonViewComponent,ModalComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,

    NgbModule.forRoot(),
    ThemeModule.forRoot(),
    CoreModule.forRoot(),
  ],
  bootstrap: [AppComponent],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
    AuthGuardService,
    AuthService,
  ],
  entryComponents: [
    ButtonViewComponent,
    ReviewButtonViewComponent,
    ModalComponent
  ],
})
export class AppModule {
}
