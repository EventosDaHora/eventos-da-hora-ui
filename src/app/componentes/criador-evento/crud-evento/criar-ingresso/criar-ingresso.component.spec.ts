import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarIngressoComponent } from './criar-ingresso.component';

describe('CriarIngressoComponent', () => {
  let component: CriarIngressoComponent;
  let fixture: ComponentFixture<CriarIngressoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriarIngressoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriarIngressoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
