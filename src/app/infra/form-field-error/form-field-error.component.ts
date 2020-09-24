import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {WrapperApierror} from "../validation/wrapperApierror";

@Component({
  selector: 'app-form-field-error',
  template: `
    <p class="text-danger" style="margin: .5em; color : red;">
      {{errorMessage}}
    </p>
  `,
  styleUrls: ['./form-field-error.component.scss']
})
// @ts-ignore
export class FormFieldErrorComponent implements OnInit {

  // @ts-ignore
  @Input('form-control') formControl: FormControl;
  @Input('server-error-messages') serverErrorMessages: WrapperApierror;
  @Input('server-error-messages-field-name') fieldName: string;

  resourceForm: FormGroup;

  constructor() {
  }

  ngOnInit(): void {
  }

  public get errorMessage(): string | null {
    if (this.mustShowErrorMessage())
      return this.getErrorMessage();
    else
      return null;
  }

  private mustShowErrorMessage(): boolean {
    return (this.formControl.invalid && this.formControl.touched);
  }

  private getErrorMessage(): string | null {
    if (this.formControl.errors.serviceError) {
      return this.getMessageFieldError(this.fieldName);
    } else if (this.formControl.errors.required) {
      return "Campo obrigatório";
    } else if (this.formControl.errors.email) {
      return "Formato de email invalido";
    } else if (this.formControl.errors.minlength) {
      const requiredLength = this.formControl.errors.minlength.requiredLength;
      return `Deve ter no mínimo ${requiredLength} caracters`;
    } else if (this.formControl.errors.maxlength) {
      const requiredLength = this.formControl.errors.maxlength.requiredLength;
      return `Deve ter no máximo ${requiredLength} caracters`;
    } else if (this.formControl.errors.mustMatch) {
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

  isFieldServerError(nameField: string): boolean {
    let flag: boolean = false;
    if (this.serverErrorMessages != null && this.serverErrorMessages.apierror != null) {
      this.serverErrorMessages.apierror.subErrors
        .forEach(item => {
          if (item.field === nameField) {
            flag = true;
            return;
          }
        });
    }
    return flag;
  }
}
