import { TestBed, inject } from '@angular/core/testing';

import { HeaderTitleService } from './header-title.service';

describe('HeaderTitleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HeaderTitleService]
    });
  });

  it('should be created', inject([HeaderTitleService], (service: HeaderTitleService) => {
    expect(service).toBeTruthy();
  }));
});
