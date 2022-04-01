import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderBodyComponent } from './header-body.component';

describe('HeaderBodyComponent', () => {
  let component: HeaderBodyComponent;
  let fixture: ComponentFixture<HeaderBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderBodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
