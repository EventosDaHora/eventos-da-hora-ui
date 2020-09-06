import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoMapaComponent } from './grafico-mapa.component';

describe('GraficoMapaComponent', () => {
  let component: GraficoMapaComponent;
  let fixture: ComponentFixture<GraficoMapaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficoMapaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficoMapaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
