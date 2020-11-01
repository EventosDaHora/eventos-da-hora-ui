import {Component, OnInit} from '@angular/core';
import {EventoService} from '../../../../services/evento/evento.service';
import {CategoriaService} from "../../../../services/categoria/categoria.service";
import {Category} from "../../../../dominio/Category";
import {Event} from "../../../../dominio/Event";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
// @ts-ignore
export class IndexComponent implements OnInit {

  categorias: Category[] = [];
  evento: Event;

  constructor(private eventoService: EventoService, private categoryService: CategoriaService) { }

  ngOnInit(): void {
    // this.evento = this.eventoService.getById(1);
    this.getAllCategories();
  }

  getAllCategories() {
    this.categoryService.getAll().subscribe(
        (entries) => (this.categorias = entries as Category[]),
        (error) => console.log('Erro ao carregar categorias')
    );
  }

}
