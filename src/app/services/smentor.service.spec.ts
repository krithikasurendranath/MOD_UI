import { TestBed } from '@angular/core/testing';

import { SmentorService } from './smentor.service';

describe('SmentorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SmentorService = TestBed.get(SmentorService);
    expect(service).toBeTruthy();
  });
});
