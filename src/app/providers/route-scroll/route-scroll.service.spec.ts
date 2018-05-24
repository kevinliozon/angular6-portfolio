import { TestBed, inject } from '@angular/core/testing';

import { RouteScrollService } from './route-scroll.service';

describe('RouteScrollService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RouteScrollService]
    });
  });

  it('should be created', inject([RouteScrollService], (service: RouteScrollService) => {
    expect(service).toBeTruthy();
  }));
});
