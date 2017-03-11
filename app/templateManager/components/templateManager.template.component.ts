import { Component } from '@angular/core';
import { RouterService } from '../../services/router.service';
import { FileUploader } from 'ng2-file-upload';
import { FileItem } from 'ng2-file-upload';
import { ParsedResponseHeaders } from 'ng2-file-upload';
import { PdfParsingResponse } from '../models/pdfparsingresponse';
import { plainToClass } from "class-transformer";
import { NewTemplateState } from "../models/newtemplatestate";
import { Program } from "../models/program";
import { Status } from "../models/status";


const UploadUrl = '/admin/api/templatemanager/uploadpdftemplate';

declare var window: any;


@Component({
    selector: 'app-template-template',
    templateUrl: window.serverSideSettings.appPath +
    '/AdminSite/app/templateManager/views/templateManager.template.view.html'
})
export class TemplateManagerTemplateComponent {

    public uploader: FileUploader;

    //-------------------- Model part
    public parsingResponse: PdfParsingResponse;
    public isError: boolean;
    public newTemplateState: NewTemplateState;

    public programs: Array<Program> = [
        new Program("DDD",
            "TestProgram1",
            "Some code1",
            [new Status("TestStatus11"), new Status("TestStatus12"), new Status("TestStatus13")]),
        new Program("EEE",
            "TestProgram2",
            "Some code2",
            [new Status("TestStatus21"), new Status("TestStatus22"), new Status("TestStatus23")]),
        new Program("CCC",
            "TestProgram3",
            "Some code3",
            [new Status("TestStatus31"), new Status("TestStatus32"), new Status("TestStatus33")])
    ];
    public orgUnits: string[] = ["OrgUnit1", "OrgUnit2", "OrgUnit3", "OrgUnit4", "OrgUnit5"];
    //-------------------------------

    constructor(public routerService: RouterService) {
        this.uploader = new FileUploader({ url: window.serverSideSettings.appPath + UploadUrl });

        this.uploader.onCompleteItem = this.onUploadComplete.bind(this);
        this.uploader.onErrorItem = this.onUploadError.bind(this);

        this.newTemplateState = new NewTemplateState();
        this.newTemplateState.programs.push(this.programs[0]);
        this.newTemplateState.orgUnit = this.orgUnits[0];
    }

    public onUploadFileChanged(e: any): void {
        this.isError = false;
        this.parsingResponse = null;
        this.uploader.uploadAll();
        this.newTemplateState.file = e.value;
    }

    public onUploadComplete(item: FileItem, response: string, status: number, headers: ParsedResponseHeaders): void {
        if (status != 200 || response == '')
            return;

        var plainObj = JSON.parse(response);
        this.parsingResponse = plainToClass<PdfParsingResponse, Object>(PdfParsingResponse, plainObj);

        this.newTemplateState.templateName = this.parsingResponse.FileName;
        this.newTemplateState.file = item;
    }

    public onUploadError(item: FileItem, response: string, status: number, headers: ParsedResponseHeaders): void {
        this.isError = true;
    }

    public onOrgUnitSelected(orgUnit) {
        this.newTemplateState.orgUnit = orgUnit;
    }



    public isFormValid(): boolean {
        return this.newTemplateState.templateName !== "" &&
            this.newTemplateState.orgUnit !== "" &&
            this.newTemplateState.programs != null &&
            this.newTemplateState.file != null;
    }



    public addProgram() {
        this.newTemplateState.programs.push(this.programs.find(p => this.newTemplateState.programs.every((value: Program) => { return p.id != value.id })));
    }

    public getProgramsWithoutSelected(program: Program): Program[] {
        if (this.newTemplateState.programs.length > 1) {
            let currentProgramms: Program[] = [];
            for (let p of this.programs) {
                if (p.id == program.id) currentProgramms.push(p);
                else if (this.newTemplateState.programs.every((value: Program) => { return value.id != p.id })) currentProgramms.push(p);
            }
            return currentProgramms;
        }
        return this.programs;
    }

    public onProgramSelected(programIndex, selectedProgramIndex) {
        this.newTemplateState.programs[programIndex] = this.programs[selectedProgramIndex];
    }

    public removeProgram(program: Program) {
        this.newTemplateState.programs = this.newTemplateState.programs.filter((value: Program) => { return value.id != program.id });
    }

    goback() {
        this.routerService.navigateBack();
    }
}