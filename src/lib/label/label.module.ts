import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {LabelConfig} from "./label.config";
import {LabelService} from "./label.service";
import {LabelComponent} from "./label-component.component";
import {LabelEditForm} from "./label-edit-form.component";
import {LabelTable} from "./label-table.component";
import {LabelEditModal} from "./label-edit-modal.component";
import {LabelEditTable} from "./label-edit-table.component";
import {LabelAddTable} from "./label-add.component";
import {ModalModule, TooltipModule} from "ngx-bootstrap";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgxPaginationModule} from "ngx-pagination";
import {LabelTableService} from "./labelTable.service";
import {LabelLangSwitchComponent} from "./label-lang-switch-component.component";
import {LabelPipe} from "./label-pipe.pipe";
import {CookieService} from "./cookie/cookie.service";

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
      LabelAddTable
  ],
  entryComponents: [LabelEditModal],
  providers:[LabelService,LabelTableService,CookieService],
  exports:[LabelComponent, LabelLangSwitchComponent, LabelPipe]
})
export class LabelModule {

  static forRoot(config: LabelConfig) {
    return {
      ngModule: LabelModule,
      providers: [{provide: 'config', useValue: config}]
    }
  }
}
