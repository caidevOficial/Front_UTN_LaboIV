import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddActorsComponent } from './add-actors.component';

describe('AddActorsComponent', () => {
  let component: AddActorsComponent;
  let fixture: ComponentFixture<AddActorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddActorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddActorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
