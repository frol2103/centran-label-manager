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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var label_config_1 = require("./label.config");
var rxjs_1 = require("rxjs");
var LabelService = (function () {
    function LabelService(config) {
        this.config = config;
        this.lang = new rxjs_1.BehaviorSubject(this.languages[0]);
        this.urlPrefix = "/labelmanager/app/" + this.appName;
    }
    Object.defineProperty(LabelService.prototype, "languages", {
        get: function () {
            return this.config.languages;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LabelService.prototype, "appName", {
        get: function () {
            return this.config.appName;
        },
        enumerable: true,
        configurable: true
    });
    LabelService.prototype.changeLang = function (lang) {
        this.lang.next(lang);
    };
    LabelService = __decorate([
        core_1.Injectable(),
        __param(0, core_1.Inject('config')),
        __metadata("design:paramtypes", [label_config_1.LabelConfig])
    ], LabelService);
    return LabelService;
}());
exports.LabelService = LabelService;
//# sourceMappingURL=label.service.js.map