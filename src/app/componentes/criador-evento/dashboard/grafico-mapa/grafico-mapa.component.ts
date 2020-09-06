import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import ChartGeo from 'chartjs-chart-geo';
import Chart from 'chartjs-chart-geo';


@Component({
  selector: 'app-grafico-mapa',
  templateUrl: './grafico-mapa.component.html',
  styleUrls: ['./grafico-mapa.component.scss']
})
export class GraficoMapaComponent implements OnInit {

  constructor() {
  }

  @ViewChild('canvas')
  canvas: ElementRef<HTMLCanvasElement>;

  map: any;

  ngOnInit(): void {
    fetch('https://unpkg.com/world-atlas/countries-50m.json').then((r) => r.json()).then((data) => {
      const countries = ChartGeo.topojson.feature(data, data.objects.countries).features;

      const chart = new Chart(this.canvas.nativeElement.getContext('2d'), {
        type: 'choropleth',
        data: {
          labels: countries.map((d) => d.properties.name),
          datasets: [{
            label: 'Countries',
            data: countries.map((d) => ({feature: d, value: Math.random()})),
          }]
        },
        options: {
          showOutline: true,
          showGraticule: true,
          legend: {
            display: false
          },
          scale: {
            projection: 'equalEarth'
          },
          geo: {
            colorScale: {
              display: true,
            },
          },
        }
      });
    });
  }

}
