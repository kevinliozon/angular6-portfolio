import { TestBed, inject } from '@angular/core/testing';

import { GAnalyticsService } from './g-analytics.service';

describe('GAnalyticsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GAnalyticsService]
    });
  });

  it('should be created', inject([GAnalyticsService], (service: GAnalyticsService) => {
    expect(service).toBeTruthy();
  }));
});
