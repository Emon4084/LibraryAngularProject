import { TestBed } from '@angular/core/testing';

import { BookauthorService } from './bookauthor.service';

describe('BookauthorService', () => {
  let service: BookauthorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookauthorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
