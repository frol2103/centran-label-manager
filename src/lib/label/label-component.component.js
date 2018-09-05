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
var label_edit_modal_component_1 = require("./label-edit-modal.component");
var ngx_bootstrap_1 = require("ngx-bootstrap");
var LabelComponentEdition = (function () {
    function LabelComponentEdition(labelService, modalService) {
        this.labelService = labelService;
        this.modalService = modalService;
        this.noInfo = false;
    }
    LabelComponentEdition.prototype.onEdit = function () {
        var modalRef = this.modalService.show(label_edit_modal_component_1.LabelEditModal, { class: 'gray modal-lg modal-xl' });
        modalRef.content.setKey(this.key);
    };
    LabelComponentEdition.prototype.ngOnInit = function () {
        this.label = this.labelService.getLabel(this.key);
        this.labelValue = this.label.map(function (l) { return ((l) ? l.value : null); });
        if (this.noInfo == false)
            this.labelHelp = this.label.map(function (l) { return (l) ? l.help : null; });
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], LabelComponentEdition.prototype, "key", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], LabelComponentEdition.prototype, "needed", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], LabelComponentEdition.prototype, "noInfo", void 0);
    LabelComponentEdition = __decorate([
        core_1.Component({
            selector: 'l',
            templateUrl: './label-component-edition.component.html',
            styleUrls: ['label-component-edition.component.css']
        }),
        __metadata("design:paramtypes", [labelEdition_service_1.LabelEditionService, ngx_bootstrap_1.BsModalService])
    ], LabelComponentEdition);
    return LabelComponentEdition;
}());
exports.LabelComponentEdition = LabelComponentEdition;
//# sourceMappingURL=label-component-edition.component.js.map