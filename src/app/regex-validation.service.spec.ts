import { TestBed } from '@angular/core/testing';

import { RegexValidationService } from './regex-validation.service';

describe('RegexValidationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RegexValidationService = TestBed.get(RegexValidationService);
    expect(service).toBeTruthy();
  });
});
