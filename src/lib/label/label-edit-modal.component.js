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
var ngx_bootstrap_1 = require("ngx-bootstrap");
var LabelEditModal = (function () {
    function LabelEditModal(labelService, activeModal) {
        this.labelService = labelService;
        this.activeModal = activeModal;
        this.languages = labelService.languages;
    }
    LabelEditModal.prototype.setKey = function (key) {
        var _this = this;
        this.key = key;
        this.labelService.getMultilingualLabel(key).subscribe(function (f) { return _this.labels = f; });
    };
    LabelEditModal.prototype.getLabel = function (lang) {
        var found = this.labels.find(function (l) { return l.lang === lang; });
        if (found) {
            return found;
        }
        else {
            return new labelEdition_service_1.LabelEdition(this.key, null, null, lang);
        }
    };
    LabelEditModal = __decorate([
        core_1.Component({
            templateUrl: './label-edit-modal.component.html',
            styleUrls: ['./label-edit-modal.component.css']
        }),
        __metadata("design:paramtypes", [labelEdition_service_1.LabelEditionService, ngx_bootstrap_1.BsModalRef])
    ], LabelEditModal);
    return LabelEditModal;
}());
exports.LabelEditModal = LabelEditModal;
//# sourceMappingURL=label-edit-modal.component.js.map