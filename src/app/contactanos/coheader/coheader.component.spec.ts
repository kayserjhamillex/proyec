import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoheaderComponent } from './coheader.component';

describe('CoheaderComponent', () => {
  let component: CoheaderComponent;
  let fixture: ComponentFixture<CoheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
