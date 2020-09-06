import {Component, Input, OnInit} from '@angular/core';
import {TipoGrafico} from '../../util/dominio/enums/TipoGrafico';
import {MessageService} from 'primeng';

@Component({
  selector: 'app-card-analytics',
  templateUrl: './card-analytics.component.html',
  styleUrls: ['./card-analytics.component.scss'],
  providers: [MessageService]
})
export class CardAnalyticsComponent implements OnInit {

  @Input()
  header ?: string;

  @Input()
  valorEstatistica: number;

  @Input()
  periodo: string;

  @Input()
  tipoGrafico ?: TipoGrafico;

  @Input()
  altura?: string;


  graficoProgresso = false;

  data: any;

  constructor(private messageService: MessageService) {
    this.data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: '',
          backgroundColor: '#FFB300',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          options: {
            legend: {
              display: false
            }
          }
        },
      ]
    };
  }

  ngOnInit(): void {
    this.graficoProgresso = TipoGrafico.PROGRESSO === this.tipoGrafico;
  }

  getTitulo() {
    return `${this.valorEstatistica} / ${this.periodo}`;
  }

  selectData(event) {
    this.messageService.add(
      {
        severity: 'info',
        summary: 'Data Selected',
        detail: this.data.datasets[event.element._datasetIndex].data[event.element._index]
      });
  }

}
