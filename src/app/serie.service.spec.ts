import { TestBed } from '@angular/core/testing';

import { SerieService } from './serie.service';

describe('SerieService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SerieService = TestBed.get(SerieService);
    expect(service).toBeTruthy();
  });
});
