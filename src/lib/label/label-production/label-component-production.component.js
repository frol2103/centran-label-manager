"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var labelProduction_service_1 = require("./labelProduction.service");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var LabelComponentProduction = (function () {
    function LabelComponentProduction(labelService, modalService) {
        this.labelService = labelService;
        this.modalService = modalService;
        this.toggleInfo = false;
        this.noInfo = false;
    }
    LabelComponentProduction.prototype.ngOnInit = function () {
        this.label = this.labelService.getLabel(this.key);
        this.labelValue = this.label.map(function (l) { return ((l) ? l.value : null); });
        if (this.noInfo == false)
            this.labelHelp = this.label.map(function (l) { return (l) ? l.help : null; });
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], LabelComponentProduction.prototype, "key", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], LabelComponentProduction.prototype, "needed", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], LabelComponentProduction.prototype, "noInfo", void 0);
    LabelComponentProduction = __decorate([
        core_1.Component({
            selector: 'l',
            templateUrl: './label-component-production.component.html',
            styleUrls: ['./label-component-production.component.css']
        }),
        __metadata("design:paramtypes", [labelProduction_service_1.LabelProductionService, ng_bootstrap_1.NgbModal])
    ], LabelComponentProduction);
    return LabelComponentProduction;
}());
exports.LabelComponentProduction = LabelComponentProduction;
//# sourceMappingURL=label-component-production.component.js.map