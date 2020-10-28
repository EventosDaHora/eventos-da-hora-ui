import {Component, Injector, OnInit} from '@angular/core';
import {BaseFormComponent} from "../../../../../infra/base-form-component/base-form-component.component";
import {User} from "../../../../../dominio/user/user.model";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../../../../services/user/user.service";
import {AuthService} from "../../../../../infra/security/auth.service";
import {Validators} from "@angular/forms";
import {UserCreatePasswordService} from "../../../../../services/user/user-create-password.service";
import {UserCreatePassword} from "../../../../../dominio/user/user-create-password.model";
import {NotificationService} from "../../../../../services/notification.service";

@Component({
    selector: 'app-criar-senha',
    templateUrl: './criar-senha.component.html',
    styleUrls: ['./criar-senha.component.scss']
})
// @ts-ignore
export class CriarSenhaComponent extends BaseFormComponent implements OnInit {

    userCreatePassword: UserCreatePassword;
    idUser: number;
    dsToken: string;

    constructor(
        private router: Router,
        private authService: AuthService,
        protected route: ActivatedRoute,
        protected userCreatePasswordService: UserCreatePasswordService,
        private notificationService: NotificationService,
        protected injector: Injector) {
        super(injector);

        this.idUser = this.route.snapshot.params.id;
        this.dsToken = this.route.snapshot.params.dsToken;
    }

    ngOnInit(): void {
        this.userCreatePassword = new UserCreatePassword();

        if (this.authService.isLoggedIn()) {
            this.router.navigate(['conta/dashboard-usuario']);
        }

        this.buildResourceForm();
    }

    protected buildResourceForm() {
        this.resourceForm = this.formBuilder.group({
            idUser: [null],
            newPassword: [null, [Validators.required, Validators.minLength(6), Validators.maxLength(255)]],
            confirmPassword: [null, [Validators.required, Validators.minLength(6), Validators.maxLength(255)]]
        });
    }

    submitForm() {
        this.submittingForm = true;

        this.userCreatePassword.idUser = this.idUser;
        this.userCreatePassword.newPassword = this.resourceForm.value.newPassword;

        this.userCreatePasswordService.createPassword(this.userCreatePassword, this.dsToken).subscribe(
            (resourceTemp) => this.actionsForSuccess(),
            (error) => this.actionsForError(error)
        );
    }

    protected actionsForSuccess(): void {
      this.notificationService.success('Sucesso ao cadastrar senha.', 'Nova Senha');
      this.router.navigate(['/conta/login']);
    }
}
