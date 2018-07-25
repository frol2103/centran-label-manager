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
var LabelAddTable = (function () {
    function LabelAddTable(fb, labelService) {
        this.fb = fb;
        this.labelService = labelService;
        this.onAdd = new core_1.EventEmitter();
    }
    LabelAddTable.prototype.ngOnInit = function () {
        this.buildForm();
    };
    LabelAddTable.prototype.buildForm = function () {
        this.addForm = this.fb.group({
            key: ''
        });
    };
    LabelAddTable.prototype.add = function () {
        this.onAdd.emit(this.addForm.get('key').value);
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], LabelAddTable.prototype, "onAdd", void 0);
    LabelAddTable = __decorate([
        core_1.Component({
            selector: 'label-add',
            template: '<form [formGroup]="addForm">' +
                '<div class="row">' +
                '<input type="text" formControlName="key" class="form-control col-md-10" [required]="true">' +
                '<div class="col-md-2"><button class="btn btn-fin03" [disabled]="addForm.invalid" (click)="add()"><span class="fa fa-plus "></span></button></div>' +
                '</div>' +
                '</form>' +
                '<div class="pad-top-5erm"></div>',
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder, labelEdition_service_1.LabelEditionService])
    ], LabelAddTable);
    return LabelAddTable;
}());
exports.LabelAddTable = LabelAddTable;
//# sourceMappingURL=label-add.component.js.map