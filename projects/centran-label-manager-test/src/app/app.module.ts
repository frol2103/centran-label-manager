import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LabelModule} from "projects/centran-label-manager/src/public-api";
import {environment} from './../environments/environment';
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {BackendMockInterceptor} from './backend-mock-interceptor'
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LabelModule.forRoot({
      languages: ["FR"],
      labelSourceUrl: environment.labelSourceUrl,
      urlPrefix: environment.labelPrefix,
      urlSuffix: environment.labelSuffix,
      prod: environment.production,
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
