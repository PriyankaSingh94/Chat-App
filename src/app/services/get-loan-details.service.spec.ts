import { TestBed, inject } from '@angular/core/testing';

import { GetLoanDetailsService } from './get-loan-details.service';

describe('GetLoanDetailsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetLoanDetailsService]
    });
  });

  it('should be created', inject([GetLoanDetailsService], (service: GetLoanDetailsService) => {
    expect(service).toBeTruthy();
  }));
});
