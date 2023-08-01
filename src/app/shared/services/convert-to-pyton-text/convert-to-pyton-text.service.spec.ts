import { TestBed } from '@angular/core/testing';

import { ConvertToPytonTextService } from './convert-to-pyton-text.service';

describe('ConvertToPytonTextService', () => {
  let service: ConvertToPytonTextService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConvertToPytonTextService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
