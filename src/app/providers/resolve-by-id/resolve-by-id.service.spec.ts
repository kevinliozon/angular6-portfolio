import { TestBed, inject } from '@angular/core/testing';

import { ResolveByIdService } from './resolve-by-id.service';

describe('ResolveByIdService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResolveByIdService]
    });
  });

  it('should be created', inject([ResolveByIdService], (service: ResolveByIdService) => {
    expect(service).toBeTruthy();
  }));
});
