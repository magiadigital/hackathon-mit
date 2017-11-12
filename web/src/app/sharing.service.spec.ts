import { TestBed, inject } from '@angular/core/testing';

import { SharingService } from './sharing.service';

describe('SharingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SharingService]
    });
  });

  it('should be created', inject([SharingService], (service: SharingService) => {
    expect(service).toBeTruthy();
  }));
});
