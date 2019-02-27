import { TestBed } from '@angular/core/testing';

import { ContentModeratorService } from './content-moderator.service';

describe('ContentModeratorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ContentModeratorService = TestBed.get(ContentModeratorService);
    expect(service).toBeTruthy();
  });
});
