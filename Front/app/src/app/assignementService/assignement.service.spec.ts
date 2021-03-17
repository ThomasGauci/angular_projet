import { TestBed } from '@angular/core/testing';

import { AssignementService } from './assignement.service';

describe('AssignementService', () => {
  let service: AssignementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssignementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
