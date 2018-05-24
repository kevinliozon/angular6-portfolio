import { TestBed, inject } from '@angular/core/testing';

import { DiplomaService } from './diploma.service';

describe('DiplomaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DiplomaService]
    });
  });

  it('should be created', inject([DiplomaService], (service: DiplomaService) => {
    expect(service).toBeTruthy();
  }));
});
