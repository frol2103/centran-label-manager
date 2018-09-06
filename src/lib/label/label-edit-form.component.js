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
var forms_1 = require("@angular/forms");
var LabelEditForm = (function () {
    function LabelEditForm(fb, labelService) {
        this.fb = fb;
        this.labelService = labelService;
        this.submitPending = false;
        this.labelForm = this.fb.group({
            labelValue: '',
            help: '',
        });
    }
    LabelEditForm.prototype.ngOnInit = function () {
        this.labelForm.patchValue({ "help": this.label.help, "labelValue": this.label.value });
    };
    LabelEditForm.prototype.onSubmit = function () {
        var _this = this;
        this.submitPending = true;
        this.labelService
            .update(new labelEdition_service_1.LabelEdition(this.label.key, this.labelForm.get("labelValue").value, this.labelForm.get("help").value, this.label.lang))
            .subscribe(null, function (e) { return console.log("error", e); }, function () { return _this.submitPending = false; });
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", labelEdition_service_1.LabelEdition)
    ], LabelEditForm.prototype, "label", void 0);
    LabelEditForm = __decorate([
        core_1.Component({
            selector: 'label-edit-form',
            templateUrl: './label-edit-form.component.html',
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder, labelEdition_service_1.LabelEditionService])
    ], LabelEditForm);
    return LabelEditForm;
}());
exports.LabelEditForm = LabelEditForm;
//# sourceMappingURL=label-edit-form.component.js.map