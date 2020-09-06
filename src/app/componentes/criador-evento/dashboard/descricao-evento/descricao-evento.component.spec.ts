import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescricaoEventoComponent } from './descricao-evento.component';

describe('DescricaoEventoComponent', () => {
  let component: DescricaoEventoComponent;
  let fixture: ComponentFixture<DescricaoEventoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescricaoEventoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescricaoEventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
