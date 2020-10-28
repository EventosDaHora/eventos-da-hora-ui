import {Component, OnInit} from '@angular/core';
import {Evento} from 'src/app/dominio/Evento';
import {EventoService} from '../../../../services/evento/evento.service';
import {CategoriaService} from "../../../../services/categoria/categoria.service";
import {Categoria} from "../../../../dominio/Categoria";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  categorias: Categoria[] = [];
  evento: Evento;

  constructor(private eventoService: EventoService, private categoryService: CategoriaService) { }

  ngOnInit(): void {
    this.evento = this.eventoService.criaEvento();
    this.getAllCategories();
  }

  getAllCategories() {
    this.categoryService.getAll().subscribe(
        (entries) => (this.categorias = entries as Categoria[]),
        (error) => alert('Erro ao carregar categorias')
    );
  }

}
