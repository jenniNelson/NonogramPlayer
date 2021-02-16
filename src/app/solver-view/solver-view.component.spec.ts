import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolverViewComponent } from './solver-view.component';

describe('SolverViewComponent', () => {
  let component: SolverViewComponent;
  let fixture: ComponentFixture<SolverViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolverViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolverViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
