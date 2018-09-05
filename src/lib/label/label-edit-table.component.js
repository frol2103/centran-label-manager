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
var labelEdition_service_1 = require("./labelEdition.service");
var LabelEditTable = (function () {
    function LabelEditTable() {
        this.onBack = new core_1.EventEmitter();
    }
    LabelEditTable.prototype.getLabel = function (lang) {
        var found = this.labels[this.key].find(function (l) { return l.lang === lang; });
        if (found) {
            return found;
        }
        else {
            return new labelEdition_service_1.LabelEdition(this.key, null, null, lang);
        }
    };
    LabelEditTable.prototype.goBack = function () {
        this.onBack.emit();
    };
    __decorate([
        core_1.Input("key"),
        __metadata("design:type", String)
    ], LabelEditTable.prototype, "key", void 0);
    __decorate([
        core_1.Input("languages"),
        __metadata("design:type", Array)
    ], LabelEditTable.prototype, "languages", void 0);
    __decorate([
        core_1.Input("labels"),
        __metadata("design:type", Array)
    ], LabelEditTable.prototype, "labels", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], LabelEditTable.prototype, "onBack", void 0);
    LabelEditTable = __decorate([
        core_1.Component({
            selector: 'label-edit-table',
            templateUrl: './label-edit-table.component.html',
            styleUrls: ['./label-edit-table.component.css']
        })
    ], LabelEditTable);
    return LabelEditTable;
}());
exports.LabelEditTable = LabelEditTable;
//# sourceMappingURL=label-edit-table.component.js.map