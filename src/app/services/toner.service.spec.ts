import { TestBed } from '@angular/core/testing';

import { TonerService } from './toner.service';

describe('TonerService', () => {
  let service: TonerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TonerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
