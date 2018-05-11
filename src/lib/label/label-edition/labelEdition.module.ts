import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {NgModule} from "@angular/core";
import {LabelComponentEdition} from "./label-component-edition.component";
import {LabelLangSwitchComponentEdition} from "./label-lang-switch-component-edition.component";
import {LabelEditionService} from "./labelEdition.service";
import {ReactiveFormsModule} from "@angular/forms";
import {LabelEditForm} from "./label-edit-form.component";
import {LabelEditModal} from "./label-edit-modal.component";
import {CommonModule} from "@angular/common";
import {HttpModule} from "@angular/http";
import {LabelPipeEdition} from "./label-pipe-edition.pipe";
import {LabelInfoModalComponent} from "../label-info-modal/label-info-modal.component";

@NgModule({
  declarations: [
    LabelComponentEdition,
    LabelLangSwitchComponentEdition,
    LabelEditForm,
    LabelEditModal,
    LabelPipeEdition,
    LabelInfoModalComponent
  ],
  imports: [
    HttpModule,
    CommonModule,
    NgbModule,
    ReactiveFormsModule,
  ],
  entryComponents: [LabelEditModal,LabelInfoModalComponent],
  providers: [LabelEditionService],
  exports: [LabelComponentEdition, LabelLangSwitchComponentEdition, LabelPipeEdition]
})
export class LabelEditionModule {
}
