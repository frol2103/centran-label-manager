"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var core_1 = require("@angular/core");
var label_component_production_component_1 = require("./label-component-production.component");
var label_lang_switch_component_production_component_1 = require("./label-lang-switch-component-production.component");
var labelProduction_service_1 = require("./labelProduction.service");
var forms_1 = require("@angular/forms");
var common_1 = require("@angular/common");
var label_pipe_production_pipe_1 = require("./label-pipe-production.pipe");
var label_info_modal_component_1 = require("../label-info-modal/label-info-modal.component");
var ngx_bootstrap_1 = require("ngx-bootstrap");
var LabelProductionModule = (function () {
    function LabelProductionModule() {
    }
    LabelProductionModule = __decorate([
        core_1.NgModule({
            declarations: [
                label_component_production_component_1.LabelComponentProduction,
                label_lang_switch_component_production_component_1.LabelLangSwitchComponentProduction,
                label_pipe_production_pipe_1.LabelPipeProduction,
                label_info_modal_component_1.LabelInfoModalComponent
            ],
            imports: [
                common_1.CommonModule,
                ng_bootstrap_1.NgbModule,
                forms_1.ReactiveFormsModule,
                ngx_bootstrap_1.TooltipModule.forRoot(),
            ],
            providers: [labelProduction_service_1.LabelProductionService],
            entryComponents: [label_info_modal_component_1.LabelInfoModalComponent],
            exports: [label_component_production_component_1.LabelComponentProduction, label_lang_switch_component_production_component_1.LabelLangSwitchComponentProduction, label_pipe_production_pipe_1.LabelPipeProduction]
        })
    ], LabelProductionModule);
    return LabelProductionModule;
}());
exports.LabelProductionModule = LabelProductionModule;
//# sourceMappingURL=labelProduction.module.js.map