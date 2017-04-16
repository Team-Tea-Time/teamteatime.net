import { TestBed, inject } from '@angular/core/testing';

import { SplashService } from './splash.service';

describe('TitleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SplashService]
    });
  });

  it('should ...', inject([SplashService], (service: SplashService) => {
    expect(service).toBeTruthy();
  }));
});
