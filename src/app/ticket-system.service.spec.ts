import { TestBed } from '@angular/core/testing';

import { TicketSystemService } from './ticket-system.service';

describe('TicketSystemService', () => {
  let service: TicketSystemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TicketSystemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
