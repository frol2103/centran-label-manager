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
var LabelEdition = (function () {
    function LabelEdition(key, value, help, lang) {
        this.key = key;
        this.value = value;
        this.help = help;
        this.lang = lang;
    }
    return LabelEdition;
}());
exports.LabelEdition = LabelEdition;
var LabelEditionService = (function () {
    function LabelEditionService(labelService) {
        var _this = this;
        this.labelService = labelService;
        this.labels = new rxjs_1.BehaviorSubject([]);
        this.loaded = false;
        this.urlPrefix = "/labelmanager/app/" + this.labelService.appName;
        this.rxios = new rxios_1.Rxios({
            baseURL: this.urlPrefix
        });
        //we do this to cache the result of the http request.  If we directly map the observer, as it is lazy, http calls will be done for every label
        this.labelService.lang.mergeMap(function (l) {
            console.log("We are trying things " + _this.rxios.get("/file/" + l).toPromise().then(function (value) { return value; }));
            return _this.rxios.get("/file/" + l).toPromise();
        })
            .map(function (res) { return res; })
            .map(function (res) {
            console.log("Here " + res);
            var l = _this.labels.next(res);
            _this.loaded = true;
            return l;
        })
            .catch(function (error) {
            console.log("Error in here " + error);
            return Observable_1.Observable.throw(error);
        })
            .subscribe();
    }
    Object.defineProperty(LabelEditionService.prototype, "languages", {
        get: function () {
            return this.labelService.languages;
        },
        enumerable: true,
        configurable: true
    });
    LabelEditionService.prototype.changeLang = function (lang) {
        this.labelService.changeLang(lang);
    };
    LabelEditionService.prototype.refreshLabels = function () {
        this.changeLang(this.labelService.lang.getValue());
    };
    LabelEditionService.prototype.getMultilingualLabel = function (key) {
        return this.rxios.get("/label/" + key);
    };
    LabelEditionService.prototype.getLabel = function (key) {
        var service = this;
        return this.labels.map(function (labels) { return labels[key]; }).map(function (l) {
            // if (l) {
            //     l.key = key
            // } else if (service.loaded) {
            //     console.log("missing label :" + key);
            //     let nLabel:LabelEdition = new LabelEdition(key, null, null, service.getLang());
            //     console.log("Missing label new "+nLabel);
            //     service
            //         .update(nLabel)
            //         .subscribe(
            //             null,
            //             (e : Error) => console.log("error", e)
            //         )
            // }
            return l;
        });
    };
    LabelEditionService.prototype.update = function (label) {
        var _this = this;
        return this.rxios.put("/label", label).do(function (v) { return _this.refreshLabels(); });
    };
    LabelEditionService.prototype.getLang = function () {
        return this.labelService.lang.getValue();
    };
    LabelEditionService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [label_service_1.LabelService])
    ], LabelEditionService);
    return LabelEditionService;
}());
exports.LabelEditionService = LabelEditionService;
//# sourceMappingURL=labelEdition.service.js.map