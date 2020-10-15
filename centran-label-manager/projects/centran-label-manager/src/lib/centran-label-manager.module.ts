import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {LabelConfig} from "./label.config";
import {LabelService} from "./label/label.service";
import {LabelComponent} from "./label/label-component.component";
import {LabelEditForm} from "./label/label-edit-form.component";
import {LabelTable} from "./label/label-table.component";
import {LabelEditModal} from "./label/label-edit-modal.component";
import {LabelEditTable} from "./label/label-edit-table.component";
import {LabelAddTable} from "./label/label-add.component";
import {TooltipModule} from "ngx-bootstrap/tooltip";
import {ModalModule} from "ngx-bootstrap/modal";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgxPaginationModule} from "ngx-pagination";
import {LabelTableService} from "./label/labelTable.service";
import {LabelLangSwitchComponent} from "./label/label-lang-switch-component.component";
import {LabelPipe} from "./label/label-pipe.pipe";
import {TableFilterPipe} from "./label/table-filter.pipe";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ModalModule.forRoot(),
    NgxPaginationModule,
    TooltipModule.forRoot(),
  ],
  declarations: [LabelComponent,
    LabelLangSwitchComponent,
    LabelEditForm,
    LabelEditModal,
    LabelTable,
    LabelPipe,
    LabelEditTable,
    LabelAddTable,
    TableFilterPipe
  ],
  entryComponents: [LabelEditModal],
  providers: [LabelService, LabelTableService],
  exports: [LabelComponent, LabelLangSwitchComponent, LabelPipe, LabelTable, LabelEditTable]
})
export class LabelModule {

  static forRoot(config: LabelConfig) {
    return {
      ngModule: LabelModule,
      providers: [{provide: 'config', useValue: config}]
    }
  }
}
