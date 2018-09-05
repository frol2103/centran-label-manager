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
var ngx_bootstrap_1 = require("ngx-bootstrap");
var labelEdition_service_1 = require("./labelEdition.service");
var labelTable_service_1 = require("./labelTable.service");
var LabelTable = (function () {
    function LabelTable(modalService, labelService, labelTableService) {
        this.modalService = modalService;
        this.labelService = labelService;
        this.labelTableService = labelTableService;
        this.languages = [];
        this.keys = [];
        this.keyForEdit = null;
        this.nbrItemsPerPages = [5, 10, 25, 50, 100, 500, 1000];
        this.config = {
            itemsPerPage: 5,
            currentPage: 1
        };
        this.languages = labelService.languages;
    }
    LabelTable.prototype.show = function (template) {
        var _this = this;
        this.keys = [];
        this.labelTableService.getData().subscribe(function (data) {
            _this.labels = data;
            for (var e in _this.labels) {
                _this.keys.push(e);
            }
            _this.modalRef = _this.modalService.show(template, { class: 'gray modal-lg modal-xl' });
        }, function (error) {
            console.error("Error loading labels :" + error);
        });
    };
    LabelTable.prototype.edit = function (value) {
        this.keyForEdit = value;
    };
    LabelTable.prototype.addLabel = function (value) {
        var _this = this;
        this.labelService
            .update(new labelEdition_service_1.LabelEdition(value, null, null, 'FR'))
            .subscribe(null, function (e) { return console.error("error", e); }, function () { return _this.back(); });
    };
    LabelTable.prototype.back = function () {
        var _this = this;
        this.keyForEdit = null;
        this.keys = [];
        this.labelTableService.getData().subscribe(function (data) {
            _this.labels = data;
            for (var e in _this.labels) {
                _this.keys.push(e);
            }
        }, function (error) {
            console.error("Error loading labels :" + error);
        });
    };
    LabelTable.prototype.onPageChange = function (number) {
        this.config.currentPage = number;
    };
    LabelTable.prototype.getLabel = function (key, lang) {
        var found = this.labels[key].find(function (l) { return l.lang === lang; });
        if (found) {
            return found;
        }
        else {
            return new labelEdition_service_1.LabelEdition(key, null, null, lang);
        }
    };
    LabelTable.prototype.close = function () {
        this.keyForEdit = null;
        this.modalRef.hide();
    };
    LabelTable = __decorate([
        core_1.Component({
            selector: 'label-table',
            templateUrl: './label-table.component.html',
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_1.BsModalService, labelEdition_service_1.LabelEditionService, labelTable_service_1.LabelTableService])
    ], LabelTable);
    return LabelTable;
}());
exports.LabelTable = LabelTable;
//# sourceMappingURL=label-table.component.js.map