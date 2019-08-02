import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {environment} from "../environments/environment";

import { AppComponent } from './app.component';
import {LabelModule,LabelService} from "@centran/centran-label-manager";
import { TestLabelComponent } from './test-label/test-label.component';


@NgModule({
  declarations: [
    AppComponent,
    TestLabelComponent
  ],
  imports: [
    LabelModule.forRoot({
      languages: ["NL", "FR"],
      labelSourceUrl: environment.labelSourceUrl,
      appName: "test-project",
      urlPrefix: environment.labelPrefix,
      urlSuffix: environment.labelSuffix,
      prod: environment.production,
    }),
    BrowserModule
  ],
  providers: [LabelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
