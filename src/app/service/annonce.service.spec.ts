import { TestBed } from '@angular/core/testing';

import { AnnonceService } from '../service/annonce.service';

describe('AuthGaurdService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AnnonceService = TestBed.get(AnnonceService);
    expect(service).toBeTruthy();
  });
});
