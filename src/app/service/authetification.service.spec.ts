import { TestBed } from '@angular/core/testing';

import { AuthenticationService } from '../service/authetification.service';

describe('AuthetificationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthenticationService = TestBed.get(AuthenticationService);
    expect(service).toBeTruthy();
  });
});
