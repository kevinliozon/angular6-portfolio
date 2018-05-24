import { TestBed, inject } from '@angular/core/testing';

import { CodeschoolService } from './codeschool.service';

describe('CodeschoolService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CodeschoolService]
    });
  });

  it('should be created', inject([CodeschoolService], (service: CodeschoolService) => {
    expect(service).toBeTruthy();
  }));
});
