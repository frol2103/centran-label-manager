import {ModuleWithProviders, NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {LabelConfig} from "./label.config";
import {LabelProductionModule} from "./label-production/labelProduction.module";
import {LabelEditionModule} from "./label-edition/labelEdition.module";
import {LabelService} from "./label.service";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
})
export class LabelModule {

  static production() : ModuleWithProviders {
    return {
        ngModule : LabelProductionModule
    }
  }

  static edition() : ModuleWithProviders {
    return {
        ngModule : LabelEditionModule
    }
  }

  static forRoot(config: LabelConfig) {
    return {
      ngModule: LabelModule,
      providers: [LabelService, {provide: 'config', useValue: config}]
    }
  }
}
