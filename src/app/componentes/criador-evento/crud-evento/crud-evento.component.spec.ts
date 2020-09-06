import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudEventoComponent } from './crud-evento.component';

describe('CrudEventoComponent', () => {
  let component: CrudEventoComponent;
  let fixture: ComponentFixture<CrudEventoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudEventoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudEventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
