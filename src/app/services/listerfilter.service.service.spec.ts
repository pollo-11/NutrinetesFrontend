import { TestBed } from '@angular/core/testing';

import { Listerfilter.ServiceService } from './listerfilter.service.service';

describe('Listerfilter.ServiceService', () => {
  let service: Listerfilter.ServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Listerfilter.ServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
