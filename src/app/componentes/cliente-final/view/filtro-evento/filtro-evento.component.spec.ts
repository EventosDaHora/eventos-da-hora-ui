import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroEventoComponent } from './filtro-evento.component';

describe('FiltroEventoComponent', () => {
  let component: FiltroEventoComponent;
  let fixture: ComponentFixture<FiltroEventoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltroEventoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltroEventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
