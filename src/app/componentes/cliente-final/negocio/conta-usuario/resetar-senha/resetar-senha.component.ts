import {Component, Injector, OnInit} from '@angular/core';
import {BaseFormComponent} from "../../../../../infra/base-form-component/base-form-component.component";
import {Validators} from "@angular/forms";
import {UserResetPassword} from "../../../../../dominio/user-reset-password.model";
import {Router} from "@angular/router";
import {UserResetPasswordService} from "../../../../../services/user-reset-password.service";
import {NotificationService} from "../../../../../services/notification.service";

@Component({
    selector: 'app-resetar-senha',
    templateUrl: './resetar-senha.component.html',
    styleUrls: ['./resetar-senha.component.scss']
})
export class ResetarSenhaComponent extends BaseFormComponent implements OnInit {

    public userResetPassword: UserResetPassword;

    constructor(private router: Router,
                protected injector: Injector,
                protected userResetService: UserResetPasswordService
    ) {
        super(injector);
    }

    ngOnInit(): void {
        this.userResetPassword = new UserResetPassword();
        this.buildResourceForm();
    }

    protected buildResourceForm() {
        this.resourceForm = this.formBuilder.group({
            dsEmail: [null, [Validators.required, Validators.email, Validators.maxLength(255)]]
        });
    }

    submitForm() {
        this.submittingForm = true;
        this.userResetService.resetPassword(UserResetPassword.fromJson(this.resourceForm.value)).subscribe(
            (resourceTemp) => this.actionsForSuccess(),
            (error) => this.actionsForError(error)
        );
    }

    protected actionsForSuccess(): void {
        this.notificationService.success('Sucesso ao resetar senha! Em instantes você receberá um email com as instruções de acesso.', 'Resetar Senha');
        this.router.navigate(['/']);
    }

}
