import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonogramPreviewComponent } from './nonogram-preview.component';

describe('NonogramPreviewComponent', () => {
  let component: NonogramPreviewComponent;
  let fixture: ComponentFixture<NonogramPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NonogramPreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NonogramPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
