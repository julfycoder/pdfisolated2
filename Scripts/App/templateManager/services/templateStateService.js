"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var program_1 = require("../models/program");
var TemplateStateService = (function () {
    function TemplateStateService() {
        this.programs = [
            new program_1.Program("A", "Program1"),
            new program_1.Program("B", "Program2"),
            new program_1.Program("C", "Program3"),
            new program_1.Program("D", "Program4"),
            new program_1.Program("E", "Program5")
        ];
    }
    return TemplateStateService;
}());
TemplateStateService = __decorate([
    core_1.Injectable()
], TemplateStateService);
exports.TemplateStateService = TemplateStateService;
//# sourceMappingURL=templateStateService.js.map