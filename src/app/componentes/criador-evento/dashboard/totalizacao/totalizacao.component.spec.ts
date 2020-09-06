import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalizacaoComponent } from './totalizacao.component';

describe('TotalizacaoComponent', () => {
  let component: TotalizacaoComponent;
  let fixture: ComponentFixture<TotalizacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalizacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalizacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
