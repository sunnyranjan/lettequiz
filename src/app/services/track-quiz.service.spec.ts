import { TestBed, inject } from '@angular/core/testing';

import { TrackQuizService } from './track-quiz.service';

describe('TrackQuizService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TrackQuizService]
    });
  });

  it('should ...', inject([TrackQuizService], (service: TrackQuizService) => {
    expect(service).toBeTruthy();
  }));
});
