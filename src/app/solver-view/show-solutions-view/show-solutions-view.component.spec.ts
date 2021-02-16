import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSolutionsViewComponent } from './show-solutions-view.component';

describe('ShowSolutionsViewComponent', () => {
  let component: ShowSolutionsViewComponent;
  let fixture: ComponentFixture<ShowSolutionsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowSolutionsViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowSolutionsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
