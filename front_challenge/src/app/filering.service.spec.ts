import { TestBed } from '@angular/core/testing';

import { FileringService } from './filering.service';

describe('FileringService', () => {
  let service: FileringService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FileringService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
