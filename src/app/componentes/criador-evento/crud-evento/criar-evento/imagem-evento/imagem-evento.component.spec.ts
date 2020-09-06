import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagemEventoComponent } from './imagem-evento.component';

describe('ImagemEventoComponent', () => {
  let component: ImagemEventoComponent;
  let fixture: ComponentFixture<ImagemEventoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImagemEventoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagemEventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
