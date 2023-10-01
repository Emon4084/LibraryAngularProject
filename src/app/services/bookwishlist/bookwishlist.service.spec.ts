import { TestBed } from '@angular/core/testing';

import { BookwishlistService } from './bookwishlist.service';

describe('BookwishlistService', () => {
  let service: BookwishlistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookwishlistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
