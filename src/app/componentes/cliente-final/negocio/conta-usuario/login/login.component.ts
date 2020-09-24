import {Component, Injector, OnInit} from '@angular/core';
import {BaseFormComponent} from "../../../../../infra/base-form-component/base-form-component.component";
import {UserAuth} from "../../../../../infra/security/user-auth";
import {Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../../../../../infra/security/auth.service";
import {NotificationService} from "../../../../../services/notification.service";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent extends BaseFormComponent implements OnInit {

    userAuth: UserAuth;

    constructor(
        private router: Router,
        private authService: AuthService,
        private notificationService: NotificationService,
        protected injector: Injector) {
        super(injector);

    }

    ngOnInit(): void {
        this.userAuth = new UserAuth();

        if (this.authService.isLoggedIn()) {
            this.router.navigate(['conta/dashboard-usuario']);
        }

        this.buildResourceForm();
    }

    protected buildResourceForm() {
        this.resourceForm = this.formBuilder.group({
            username: [null, [Validators.required, Validators.email]],
            password: [null, [Validators.required]]
        });
    }

    submitForm() {
        this.submittingForm = true;
        this.authService.login(UserAuth.fromJson(this.resourceForm.value))
            .subscribe(result => {
                    if (result) {
                        this.notificationService.success('Sucesso ao realizar login', 'Login');
                        this.router.navigate(['']);
                    } else {
                        this.notificationService.error('Usuário ou senha inválidos!', 'Login');
                    }
                },
                (error) => {
                    this.actionsForError(error);
                }
            );
    }

    protected actionsForError(error): void {
        this.submittingForm = false;
        if (error.status === 401) {
            this.notificationService.error('Usuário ou senha inválidos!', 'Login');
        } else {
            this.notificationService.error('Erro ao processar requisição!', 'Login');
        }
    }

}
