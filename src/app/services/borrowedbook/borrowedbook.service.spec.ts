import { TestBed } from '@angular/core/testing';

import { BorrowedbookService } from './borrowedbook.service';

describe('BorrowedbookService', () => {
  let service: BorrowedbookService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BorrowedbookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
