import { TestBed } from '@angular/core/testing';

import { SuggestedApp } from './suggested-app';

describe('SuggestedApp', () => {
  let service: SuggestedApp;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SuggestedApp);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
