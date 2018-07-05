import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {NgModule} from "@angular/core";
import {LabelComponentProduction} from "./label-component-production.component";
import {LabelLangSwitchComponentProduction} from "./label-lang-switch-component-production.component";
import {LabelProductionService} from "./labelProduction.service";
import {ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {LabelPipeProduction} from "./label-pipe-production.pipe";
import {LabelInfoModalComponent} from "../label-info-modal/label-info-modal.component";
import {TooltipModule} from "ngx-bootstrap";

@NgModule({
  declarations: [
    LabelComponentProduction,
    LabelLangSwitchComponentProduction,
    LabelPipeProduction,
    LabelInfoModalComponent
  ],
  imports: [
    CommonModule,
    NgbModule.forRoot(),
    ReactiveFormsModule,
    TooltipModule.forRoot(),
  ],
  providers: [LabelProductionService],
  entryComponents:[LabelInfoModalComponent],
  exports: [LabelComponentProduction, LabelLangSwitchComponentProduction, LabelPipeProduction]
})
export class LabelProductionModule {
}
