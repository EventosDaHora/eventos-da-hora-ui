import {Component, HostListener, OnInit} from '@angular/core';
import Map from 'ol/Map';
import View from 'ol/View';
import OSM from 'ol/source/OSM';
import TileLayer from 'ol/layer/Tile';
import {defaults as defaultControls, Attribution} from 'ol/control';

@Component({
  selector: 'app-mapa-local',
  templateUrl: './mapa-local.component.html',
  styleUrls: ['./mapa-local.component.scss']
})
export class MapaLocalComponent implements OnInit {

  map: Map;

  attribution: Attribution;

  constructor() {
    this.attribution = new Attribution({
      collapsible: false
    });
  }

  ngOnInit(): void {
    this.map = new Map({
      controls: defaultControls({attribution: false}).extend([this.attribution]),
      target: 'mapa',
      layers: [
        new TileLayer({
          source: new OSM()
        })
      ],
      view: new View({
        center: [0, 0],
        zoom: 2
      })
    });
  }

  @HostListener('window:resize', ['$event'])
  checkSize() {
    const small = this.map.getSize()[0] < 600;
    this.attribution.setCollapsible(small);
    this.attribution.setCollapsed(small);
  }

}
