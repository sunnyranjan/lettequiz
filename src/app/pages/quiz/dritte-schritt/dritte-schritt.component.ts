import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {thirdStepOptions} from '../../../models/third-step-options';
import {Subscription} from "rxjs/Subscription";
import {TrackQuizService} from "../../../services/track-quiz.service";

@Component({
  selector: 'app-dritte-schritt',
  templateUrl: './dritte-schritt.component.html',
  styleUrls: ['./dritte-schritt.component.css']
})
export class DritteSchrittComponent implements OnInit, OnDestroy {
  @Output() nextStep: EventEmitter<number> = new EventEmitter<number>();
  @Output() previousStep: EventEmitter<number> = new EventEmitter<number>();
  thirdStepOptions: any;
  interests: any;
  private interestsState: Subscription;

  constructor(private trackQuiz: TrackQuizService) {
    this.interestsState = this.trackQuiz.trackThirdStep$.subscribe((state: any ) => {
      this.interests = state;
    });
  }



  ngOnInit() {
    this.thirdStepOptions = thirdStepOptions.options;
  }
  submitThirdStep(step: number) {
    this.trackQuiz.setThirdStepChoice(this.interests);
    this.nextStep.emit(step);
  }

  ngOnDestroy(): void {
    this.interestsState.unsubscribe();
  }


}
