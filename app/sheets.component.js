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
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var drive_service_1 = require('./drive.service');
var drive_service_2 = require('./drive.service');
var SheetsComponent = (function () {
    function SheetsComponent(authService, pickerService, sanitizer) {
        this.authService = authService;
        this.pickerService = pickerService;
        this.sanitizer = sanitizer;
    }
    SheetsComponent.prototype.createPicker = function () {
        var _this = this;
        this.pickerService.createPicker().then(function (url) {
            return _this.url = _this.sanitizer.bypassSecurityTrustResourceUrl(url);
        });
    };
    SheetsComponent.prototype.ngOnInit = function () {
        //this.createPicker();
    };
    SheetsComponent = __decorate([
        core_1.Component({
            selector: 'my-sheets',
            template: "\n    <button (click)=\"createPicker()\">SELECT</button>\n    <div *ngIf=\"url\">\n      <iframe width=\"100%\" height=\"100%\" [src]=\"url\"></iframe>\n    </div>  \n",
            directives: [],
            providers: [
                drive_service_1.AuthService,
                drive_service_2.PickerService
            ]
        }), 
        __metadata('design:paramtypes', [drive_service_1.AuthService, drive_service_2.PickerService, platform_browser_1.DomSanitizationService])
    ], SheetsComponent);
    return SheetsComponent;
}());
exports.SheetsComponent = SheetsComponent;
//# sourceMappingURL=sheets.component.js.map