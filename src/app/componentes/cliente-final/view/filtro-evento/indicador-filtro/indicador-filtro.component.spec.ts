import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndicadorFiltroComponent } from './indicador-filtro.component';

describe('IndicadorFiltroComponent', () => {
  let component: IndicadorFiltroComponent;
  let fixture: ComponentFixture<IndicadorFiltroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndicadorFiltroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndicadorFiltroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
