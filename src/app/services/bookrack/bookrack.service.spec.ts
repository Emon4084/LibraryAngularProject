import { TestBed } from '@angular/core/testing';

import { BookrackService } from './bookrack.service';

describe('BookrackService', () => {
  let service: BookrackService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookrackService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
