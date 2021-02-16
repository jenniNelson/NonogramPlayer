import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonogramGridComponent } from './nonogram-grid.component';

describe('NonogramGridComponent', () => {
  let component: NonogramGridComponent;
  let fixture: ComponentFixture<NonogramGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NonogramGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NonogramGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
