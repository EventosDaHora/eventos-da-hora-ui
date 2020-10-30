import {Component, HostListener, OnInit} from '@angular/core';
import {Event} from './dominio/Event';
import {Router} from '@angular/router';
import {AuthService} from "./infra/security/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  items: Menu[];

  display = false;

  constructor(private router: Router,
              public authService: AuthService) {
  }

  evento: Event;
  colorido = false;

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.colorido = window.pageYOffset > 80;
  }

  ngOnInit(): void {
    this.items = [
      { label: 'Minha conta', routerLink: '/conta/dashboard-usuario' },
      // { label: 'Criar Evento', routerLink: '/dashboard/home' },
      { label: 'Show' },
      { label: 'Esporte' },
      { label: 'Cinema' },
      { label: 'Jogo' },
      { label: 'Teatro' },
      { label: 'Artes' },
    ];
  }

  goTo(routerLink: string) {
    this.router.navigate([routerLink]);
  }
}

interface Menu {
  label: string;
  routerLink ?: string;
}
