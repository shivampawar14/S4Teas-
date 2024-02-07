import { TestBed } from '@angular/core/testing';

import { DragDirectiveService } from './drag.directive.service';

describe('DragDirectiveService', () => {
  let service: DragDirectiveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DragDirectiveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
