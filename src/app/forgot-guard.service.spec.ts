import { TestBed } from '@angular/core/testing';

import { ForgotGuardService } from './forgot-guard.service';

describe('ForgotGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ForgotGuardService = TestBed.get(ForgotGuardService);
    expect(service).toBeTruthy();
  });
});
