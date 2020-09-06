import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoPrecoComponent } from './tipo-preco.component';

describe('TipoPrecoComponent', () => {
  let component: TipoPrecoComponent;
  let fixture: ComponentFixture<TipoPrecoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoPrecoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoPrecoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
