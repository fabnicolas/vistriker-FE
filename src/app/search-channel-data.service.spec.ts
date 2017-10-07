import { TestBed, inject } from '@angular/core/testing';

import { SearchChannelDataService } from './search-channel-data.service';

describe('SearchChannelDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchChannelDataService]
    });
  });

  it('should be created', inject([SearchChannelDataService], (service: SearchChannelDataService) => {
    expect(service).toBeTruthy();
  }));
});
