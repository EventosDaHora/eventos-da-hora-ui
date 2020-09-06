import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapaAmbienteComponent } from './mapa-ambiente.component';

describe('MapaAmbienteComponent', () => {
  let component: MapaAmbienteComponent;
  let fixture: ComponentFixture<MapaAmbienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapaAmbienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapaAmbienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
