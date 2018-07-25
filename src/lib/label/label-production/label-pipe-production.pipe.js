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
var LabelPipeProduction = (function () {
    function LabelPipeProduction(labelService) {
        this.labelService = labelService;
    }
    LabelPipeProduction.prototype.transform = function (key) {
        return this.labelService.getLabel(key).map(function (l) { return ((l) ? l.value : key); });
    };
    LabelPipeProduction = __decorate([
        core_1.Pipe({ name: 'label' }),
        __metadata("design:paramtypes", [labelProduction_service_1.LabelProductionService])
    ], LabelPipeProduction);
    return LabelPipeProduction;
}());
exports.LabelPipeProduction = LabelPipeProduction;
//# sourceMappingURL=label-pipe-production.pipe.js.map