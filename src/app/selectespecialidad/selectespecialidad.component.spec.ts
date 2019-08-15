import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectespecialidadComponent } from './selectespecialidad.component';

describe('SelectespecialidadComponent', () => {
  let component: SelectespecialidadComponent;
  let fixture: ComponentFixture<SelectespecialidadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectespecialidadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectespecialidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
