import { TestBed } from '@angular/core/testing';

import { EcranService } from './ecran.service';

describe('EcranService', () => {
  let service: EcranService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EcranService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
