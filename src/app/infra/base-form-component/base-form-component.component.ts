import {Directive, Injector} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup} from "@angular/forms";
// import {AlertService} from "../validation/alert.service";
import {WrapperApierror} from "../validation/wrapperApierror";

@Directive()
// @ts-ignore
export abstract class BaseFormComponent{

    protected serverErrorMessages: WrapperApierror;
    public resourceForm: FormGroup;
    protected formBuilder: FormBuilder;
    //TODO criar serviço para alertService
    // protected alertService: AlertService;
    protected submittingForm = false;

    constructor(
        protected injector: Injector,
    ) {
        this.formBuilder = injector.get(FormBuilder);
        //TODO criar serviço para alertService
        // this.alertService = injector.get(AlertService);
    }

    public mustShowErrorMessage(formControl: AbstractControl): boolean {
        return (formControl.invalid && formControl.touched);
    }

    public getErrorMessage(formControl: AbstractControl, fieldName: string): string | null {
        if (formControl.errors.serviceError) {
            return this.getMessageFieldError(fieldName);
        } else if (formControl.errors.required) {
            return "Campo obrigatório";
        } else if (formControl.errors.email) {
            return "Formato de email invalido";
        } else if (formControl.errors.minlength) {
            const requiredLength = formControl.errors.minlength.requiredLength;
            return `Deve ter no mínimo ${requiredLength} caracters`;
        } else if (formControl.errors.maxlength) {
            const requiredLength = formControl.errors.maxlength.requiredLength;
            return `Deve ter no máximo ${requiredLength} caracters`;
        } else if (formControl.errors.mustMatch) {
            return `Senhas não conferem`;
        }
    }

    getMessageFieldError(nameField: string) {
        let returnMessage;
        if (nameField != null && this.serverErrorMessages != null) {
            this.serverErrorMessages.apierror.subErrors
                .filter(k => k.field === nameField)
                .map(k => {
                    returnMessage = k.message;
                });
        }

        return returnMessage;
    }

    public get isDisabledForm(){
        return (this.resourceForm.invalid || this.submittingForm);
    }

    protected abstract buildResourceForm(): void;

    protected actionsForError(error): void {
        //TODO criar serviço para alertService
        // this.alertService.error('Falha ao processar sua solicitação!');
        console.log('Falha ao processar sua solicitação!')
        this.submittingForm = false;

        let wrapper: WrapperApierror = error.error;
        wrapper.status = error.status

        this.serverErrorMessages = wrapper;

        this.listenToServiceErrorChange();
    }

    listenToServiceErrorChange() {
        if (this.serverErrorMessages != null && this.serverErrorMessages.apierror != null) {
            if (this.serverErrorMessages.status === 400) {
                this.serverErrorMessages.apierror.subErrors
                    .forEach(item => {
                        this.resourceForm.controls[item.field].setErrors({'serviceError': item.message});
                    });
            }
        }
    }

}
