import { TestBed } from '@angular/core/testing';

import { BreedInfoService } from './breed-info.service';

describe('BreedInfoService', () => {
  let service: BreedInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BreedInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
