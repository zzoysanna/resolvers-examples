import { TestBed } from '@angular/core/testing';

import { AuthorsService } from './authors.service';
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe('AuthorsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule,
    ]
  }));

  it('should be created', () => {
    const service: AuthorsService = TestBed.get(AuthorsService);
    expect(service).toBeTruthy();
  });
});
