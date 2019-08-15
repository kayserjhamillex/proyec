import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CobodyComponent } from './cobody.component';

describe('CobodyComponent', () => {
  let component: CobodyComponent;
  let fixture: ComponentFixture<CobodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CobodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CobodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
