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
var templateStateService_1 = require("../services/templateStateService");
var TemplateManagerProgramFormComponent = (function () {
    function TemplateManagerProgramFormComponent(tmpService) {
        this.tmpService = tmpService;
    }
    TemplateManagerProgramFormComponent.prototype.ngOnInit = function () {
        var select = document.getElementById("selectProgram");
        select.addEventListener('change', function () {
            var index = select.selectedIndex;
            alert(index);
        });
    };
    TemplateManagerProgramFormComponent.prototype.updateListener = function () {
    };
    return TemplateManagerProgramFormComponent;
}());
TemplateManagerProgramFormComponent = __decorate([
    core_1.Component({
        selector: "app-template-programForm",
        templateUrl: window.serverSideSettings.appPath + '/AdminSite/app/templateManager/views/templateManager.programForm.view.html'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof templateStateService_1.TemplateStateService !== "undefined" && templateStateService_1.TemplateStateService) === "function" && _a || Object])
], TemplateManagerProgramFormComponent);
exports.TemplateManagerProgramFormComponent = TemplateManagerProgramFormComponent;
var _a;
//# sourceMappingURL=templateManager.programForm.component.js.map