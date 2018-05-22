import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {NgModule} from "@angular/core";
import {LabelEditionService} from "./labelEdition.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {LabelEditForm} from "./label-edit-form.component";
import {LabelEditModal} from "./label-edit-modal.component";
import {CommonModule} from "@angular/common";
import {HttpModule} from "@angular/http";
import {LabelPipeEdition} from "./label-pipe-edition.pipe";
import {LabelTable} from "./label-table.component";
import {ModalModule, TooltipModule} from "ngx-bootstrap";
import {LabelTableService} from "./labelTable.service";
import {LabelEditTable} from "./label-edit-table.component";
import {NgxPaginationModule} from "ngx-pagination";
import {LabelAddTable} from "./label-add.component";
import {LabelComponentEdition} from "./label-component-edition.component";
import {LabelLangSwitchComponentEdition} from "./label-lang-switch-component-edition.component";


@NgModule({
    declarations: [
        LabelComponentEdition,
        LabelLangSwitchComponentEdition,
        LabelEditForm,
        LabelEditModal,
        LabelTable,
        LabelPipeEdition,
        LabelEditTable,
        LabelAddTable
    ],
    imports: [
        HttpModule,
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        ModalModule.forRoot(),
        NgxPaginationModule,
        TooltipModule.forRoot(),
    ],
    entryComponents: [LabelEditModal],
    providers: [LabelEditionService,LabelTableService],
    exports: [LabelComponentEdition, LabelLangSwitchComponentEdition, LabelPipeEdition]
})
export class LabelEditionModule {
}
