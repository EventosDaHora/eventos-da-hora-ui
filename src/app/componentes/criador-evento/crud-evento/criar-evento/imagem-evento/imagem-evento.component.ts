import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imagem-evento',
  templateUrl: './imagem-evento.component.html',
  styleUrls: ['./imagem-evento.component.scss']
})
export class ImagemEventoComponent implements OnInit {

  constructor() { }

  imgSRC: any;

  ngOnInit(): void {
  }

  mostrarImagem(event) {
    console.log(event);
    this.imgSRC = event;
  }

}
