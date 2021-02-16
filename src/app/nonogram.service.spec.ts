import { TestBed } from '@angular/core/testing';

import { NonogramService } from './nonogram.service';

describe('NonogramService', () => {
  let service: NonogramService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NonogramService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
