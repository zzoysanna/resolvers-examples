import { TestBed, async, inject } from '@angular/core/testing';

import { WaitForItGuard } from './wait-for-it.guard';

describe('WaitForItGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WaitForItGuard]
    });
  });

  it('should ...', inject([WaitForItGuard], (guard: WaitForItGuard) => {
    expect(guard).toBeTruthy();
  }));
});
