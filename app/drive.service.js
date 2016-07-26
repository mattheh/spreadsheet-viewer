"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var AuthService = (function () {
    function AuthService() {
        this.init();
    }
    AuthService.prototype.init = function () {
        // My personal keys, used for testing
        //
        this.devKey = "AIzaSyDLweatDibNL1X3AV1UWE67WwJWOUf1Fvs";
        this.clientId = "189539260028-s5ucd6cd8jo7oj5p05l3uatd63dil3l4.apps.googleusercontent.com";
    };
    AuthService.prototype.getAuthToken = function () {
        return new Promise(function (resolve) {
            return authorize(function (result) {
                resolve(result.access_token);
            });
        });
    };
    AuthService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
var PickerService = (function (_super) {
    __extends(PickerService, _super);
    function PickerService() {
        _super.call(this);
    }
    PickerService.prototype.createPicker = function () {
        var _this = this;
        return new Promise(function (resolve) {
            return _super.prototype.getAuthToken.call(_this).then(function (authToken) {
                var picker = new google.picker.PickerBuilder()
                    .addView(new google.picker.DocsView(google.picker.ViewId.SPREADSHEETS))
                    .setOAuthToken(authToken)
                    .setDeveloperKey(_this.devKey)
                    .setAppId(_this.clientId)
                    .setCallback(function (data) {
                    if (data[google.picker.Response.ACTION] == google.picker.Action.PICKED) {
                        var doc = data[google.picker.Response.DOCUMENTS][0];
                        console.log(doc[google.picker.Document.EMBEDDABLE_URL]);
                        resolve(doc[google.picker.Document.EMBEDDABLE_URL]);
                    }
                })
                    .setOrigin("http://localhost:3000")
                    .build();
                picker.setVisible(true);
            });
        });
    };
    PickerService.prototype.init = function () {
        _super.prototype.init.call(this);
    };
    PickerService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], PickerService);
    return PickerService;
}(AuthService));
exports.PickerService = PickerService;
//# sourceMappingURL=drive.service.js.map