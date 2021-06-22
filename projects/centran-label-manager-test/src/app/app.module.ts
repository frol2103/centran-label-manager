import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LabelModule} from "projects/centran-label-manager/src/public-api";
import {environment} from './../environments/environment';
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {BackendMockInterceptor} from './backend-mock-interceptor'
import {ModalModule} from "ngx-bootstrap/modal";
import {TooltipModule} from "ngx-bootstrap/tooltip";
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModalModule.forRoot(),
    TooltipModule.forRoot(),
    LabelModule.forRoot({
      languages: ["FR"],
      labelSourceUrl: environment.labelSourceUrl,
      urlPrefix: environment.labelPrefix,
      urlSuffix: environment.labelSuffix,
    })
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: BackendMockInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
