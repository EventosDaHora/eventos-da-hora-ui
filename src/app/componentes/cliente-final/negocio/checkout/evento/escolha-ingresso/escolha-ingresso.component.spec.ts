import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EscolhaIngressoComponent } from './escolha-ingresso.component';

describe('EscolhaIngressoComponent', () => {
  let component: EscolhaIngressoComponent;
  let fixture: ComponentFixture<EscolhaIngressoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EscolhaIngressoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EscolhaIngressoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
