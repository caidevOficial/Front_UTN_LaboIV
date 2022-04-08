import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GitRibbonComponent } from './git-ribbon.component';

describe('GitRibbonComponent', () => {
  let component: GitRibbonComponent;
  let fixture: ComponentFixture<GitRibbonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GitRibbonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GitRibbonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
