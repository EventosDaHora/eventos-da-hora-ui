import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventosCategoriaComponent } from './eventos-categoria.component';

describe('EventosCategoriaComponent', () => {
  let component: EventosCategoriaComponent;
  let fixture: ComponentFixture<EventosCategoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventosCategoriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventosCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
