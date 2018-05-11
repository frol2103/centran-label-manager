import {ModuleWithProviders, NgModule, isDevMode} from "@angular/core";
import {CommonModule} from "@angular/common";
import {LabelConfig} from "./label.config";
import {LabelEditionModule} from "./label-edition/labelEdition.module";
import {LabelProductionModule} from "./label-production/labelProduction.module";
import {LabelService} from "./label.service";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
})
export class LabelModule {

  static switch() : ModuleWithProviders {
    if(isDevMode()){
      return {
        ngModule : LabelEditionModule
      }
    }
    return {
        ngModule : LabelProductionModule
    }
  }

  static forRoot(config: LabelConfig) {
    return {
      ngModule: LabelModule,
      providers: [LabelService, {provide: 'config', useValue: config}]
    }
  }
}
