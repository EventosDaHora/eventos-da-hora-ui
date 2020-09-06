import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {InputTextoComponent} from './input-texto.component';


describe('InputComponent', () => {
  let component: InputTextoComponent;
  let fixture: ComponentFixture<InputTextoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputTextoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputTextoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
