import {Component, Injector, OnInit} from '@angular/core';
import {Cliente} from '../../../../../dominio/Cliente';
import {BaseFormComponent} from "../../../../../infra/base-form-component/base-form-component.component";
import {UserAuth} from "../../../../../infra/security/user-auth";
import {Router} from "@angular/router";
import {AuthService} from "../../../../../infra/security/auth.service";
import {Validators} from "@angular/forms";
import {User} from "../../../../../dominio/user.model";
import {UserService} from "../../../../../services/user.service";

@Component({
  selector: 'app-criar-conta',
  templateUrl: './criar-conta.component.html',
  styleUrls: ['./criar-conta.component.scss']
})
export class CriarContaComponent extends BaseFormComponent implements OnInit {

  user: User;

  constructor(
      private router: Router,
      private userService: UserService,
      private authService: AuthService,

      //TODO implementar serviço de alerta
      // private alertServiceService: AlertService,
      protected injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    this.user = new User();

    if (this.authService.isLoggedIn()) {
      this.router.navigate(['conta/dashboard-usuario']);
    }

    this.buildResourceForm();
  }

  protected buildResourceForm() {
    this.resourceForm = this.formBuilder.group({
      idUser:     [null],
      nmUser:     [null, [Validators.required, Validators.maxLength(255)]],
      dsEmail:    [null, [Validators.required, Validators.email, Validators.maxLength(255)]],
      nuCel:      [null, [Validators.required, Validators.maxLength(20)]],
    });
  }

  submitForm() {
    this.submittingForm = true;
    this.userService.create(User.fromJson(this.resourceForm.value)).subscribe(
        (resourceTemp) => this.actionsForSuccess(),
        (error) => this.actionsForError(error)
    );
  }

  protected actionsForSuccess(): void {
    //TODO criar serviço para alertService
    // this.alertService.error('Falha ao processar sua solicitação!');
    alert('Sucesso ao cadastrar! Em instantes você receberá um email com as instruções de acesso.')
    this.router.navigate(['/']);
  }

}
