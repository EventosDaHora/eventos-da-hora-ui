import {Component, Injector, OnInit} from '@angular/core';
import {Cliente} from '../../../../../dominio/Cliente';
import {BaseFormComponent} from "../../../../../infra/base-form-component/base-form-component.component";
import {UserAuth} from "../../../../../infra/security/user-auth";
import {Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../../../../../infra/security/auth.service";

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
      //TODO implementar serviço de alerta
      // private alertServiceService: AlertService,
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
                //TODO implementar serviço de alertas
                // this.alertServiceService.success('Sucesso ao realizar login');
                alert('Sucesso ao realizar login');
                this.router.navigate(['']);
              } else {
                //TODO implementar serviço de alertas
                // this.alertServiceService.error('Usuário ou senha inválidos!');
                alert('Usuário ou senha inválidos!');

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
      //TODO implementar serviço de alertas
      // this.alertServiceService.error('Usuário ou senha inválidos!');
      alert('Usuário ou senha inválidos!');
    } else {
      //TODO implementar serviço de alertas
      //this.alertServiceService.error('Erro ao processar requisição!');
      alert('Erro ao processar requisição!');
    }
  }

}
