import { TestBed } from '@angular/core/testing';

import { BookcopyService } from './bookcopy.service';

describe('BookcopyService', () => {
  let service: BookcopyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookcopyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
