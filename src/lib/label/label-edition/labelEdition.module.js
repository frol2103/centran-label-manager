"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var labelEdition_service_1 = require("./labelEdition.service");
var forms_1 = require("@angular/forms");
var label_edit_form_component_1 = require("./label-edit-form.component");
var label_edit_modal_component_1 = require("./label-edit-modal.component");
var common_1 = require("@angular/common");
var label_pipe_edition_pipe_1 = require("./label-pipe-edition.pipe");
var label_table_component_1 = require("./label-table.component");
var ngx_bootstrap_1 = require("ngx-bootstrap");
var labelTable_service_1 = require("./labelTable.service");
var label_edit_table_component_1 = require("./label-edit-table.component");
var ngx_pagination_1 = require("ngx-pagination");
var label_add_component_1 = require("./label-add.component");
var label_component_edition_component_1 = require("./label-component-edition.component");
var label_lang_switch_component_edition_component_1 = require("./label-lang-switch-component-edition.component");
var LabelEditionModule = (function () {
    function LabelEditionModule() {
    }
    LabelEditionModule = __decorate([
        core_1.NgModule({
            declarations: [
                label_component_edition_component_1.LabelComponentEdition,
                label_lang_switch_component_edition_component_1.LabelLangSwitchComponentEdition,
                label_edit_form_component_1.LabelEditForm,
                label_edit_modal_component_1.LabelEditModal,
                label_table_component_1.LabelTable,
                label_pipe_edition_pipe_1.LabelPipeEdition,
                label_edit_table_component_1.LabelEditTable,
                label_add_component_1.LabelAddTable
            ],
            imports: [
                common_1.CommonModule,
                forms_1.ReactiveFormsModule,
                forms_1.FormsModule,
                ngx_bootstrap_1.ModalModule.forRoot(),
                ngx_pagination_1.NgxPaginationModule,
                ngx_bootstrap_1.TooltipModule.forRoot(),
            ],
            entryComponents: [label_edit_modal_component_1.LabelEditModal],
            providers: [labelEdition_service_1.LabelEditionService, labelTable_service_1.LabelTableService],
            exports: [label_component_edition_component_1.LabelComponentEdition, label_lang_switch_component_edition_component_1.LabelLangSwitchComponentEdition, label_pipe_edition_pipe_1.LabelPipeEdition]
        })
    ], LabelEditionModule);
    return LabelEditionModule;
}());
exports.LabelEditionModule = LabelEditionModule;
//# sourceMappingURL=labelEdition.module.js.map