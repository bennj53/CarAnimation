import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadlightComponent } from './headlight.component';

describe('HeadlightComponent', () => {
  let component: HeadlightComponent;
  let fixture: ComponentFixture<HeadlightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadlightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
