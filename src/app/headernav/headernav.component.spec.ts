import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadernavComponent } from './headernav.component';

describe('HeadernavComponent', () => {
  let component: HeadernavComponent;
  let fixture: ComponentFixture<HeadernavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadernavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadernavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
