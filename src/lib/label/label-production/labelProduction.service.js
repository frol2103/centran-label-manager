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
var Observable_1 = require("rxjs/Observable");
var rxjs_1 = require("rxjs");
var label_service_1 = require("../label.service");
var rxios_1 = require("rxios");
var Label = (function () {
    function Label(key, value, help) {
        this.key = key;
        this.value = value;
        this.help = help;
    }
    return Label;
}());
exports.Label = Label;
var LabelProductionService = (function () {
    function LabelProductionService(labelService) {
        var _this = this;
        this.labelService = labelService;
        this.labels = new rxjs_1.BehaviorSubject([]);
        this.rxios = new rxios_1.Rxios({
            baseURL: this.labelService.config.labelsFolderPath
        });
        //we do this to cache the result of the http request.  If we directly map the observer, as it is lazy, http calls will be done for every label
        this.labelService.lang.mergeMap(function (l) { return _this.rxios.get("labels" + l + ".json"); })
            .map(function (res) { return res.json(); })
            .catch(function (e) {
            console.error("Error while loading lang file");
            return Observable_1.Observable.of({});
        })
            .map(function (res) { return _this.labels.next(res); })
            .subscribe();
    }
    Object.defineProperty(LabelProductionService.prototype, "languages", {
        get: function () {
            return this.labelService.languages;
        },
        enumerable: true,
        configurable: true
    });
    LabelProductionService.prototype.changeLang = function (lang) {
        this.labelService.changeLang(lang);
    };
    LabelProductionService.prototype.getLabel = function (key) {
        return this.labels.map(function (labels) { return labels[key]; });
    };
    LabelProductionService.prototype.getLang = function () {
        return this.labelService.lang.getValue();
    };
    LabelProductionService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [label_service_1.LabelService])
    ], LabelProductionService);
    return LabelProductionService;
}());
exports.LabelProductionService = LabelProductionService;
//# sourceMappingURL=labelProduction.service.js.map