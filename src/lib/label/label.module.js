"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var labelProduction_module_1 = require("./label-production/labelProduction.module");
var labelEdition_module_1 = require("./label-edition/labelEdition.module");
var label_service_1 = require("./label.service");
var LabelModule = (function () {
    function LabelModule() {
    }
    LabelModule_1 = LabelModule;
    LabelModule.production = function () {
        return {
            ngModule: labelProduction_module_1.LabelProductionModule
        };
    };
    LabelModule.edition = function () {
        return {
            ngModule: labelEdition_module_1.LabelEditionModule
        };
    };
    LabelModule.forRoot = function (config) {
        return {
            ngModule: LabelModule_1,
            providers: [label_service_1.LabelService, { provide: 'config', useValue: config }]
        };
    };
    LabelModule = LabelModule_1 = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule
            ],
            declarations: [],
        })
    ], LabelModule);
    return LabelModule;
    var LabelModule_1;
}());
exports.LabelModule = LabelModule;
//# sourceMappingURL=label.module.js.map