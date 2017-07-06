import {AfterViewChecked, Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {thirdStepOptions} from '../../../models/third-step-options';
import {Subscription} from "rxjs/Subscription";
import {TrackQuizService} from "../../../services/track-quiz.service";

@Component({
  selector: 'app-dritte-schritt',
  templateUrl: './dritte-schritt.component.html',
  styleUrls: ['./dritte-schritt.component.scss']
})
export class DritteSchrittComponent implements OnInit, OnDestroy, AfterViewChecked {
  @Output() nextStep: EventEmitter<number> = new EventEmitter<number>();
  @Output() previousStep: EventEmitter<number> = new EventEmitter<number>();
  thirdStepOptions: any;
  interests: any;
  private interestsState: Subscription;

  constructor(private trackQuiz: TrackQuizService) {
    this.interestsState = this.trackQuiz.trackThirdStep$.subscribe((state: any) => {
      this.interests = state;
    });
    this.interests = this.trackQuiz.getThirdStepChoice();
  }

  ngAfterViewChecked() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0; // For Chrome, Safari and Opera
    document.documentElement.scrollTop = 0; // For IE and Firefox
  }

  ngOnInit() {
    this.thirdStepOptions = thirdStepOptions.options;

  }
  goPreviousStep(step: number) {
    this.trackQuiz.setThirdStepChoice(this.interests);
    this.previousStep.emit(step);

  }

  goNextStep(step: number) {
    this.trackQuiz.setThirdStepChoice(this.interests);
    this.nextStep.emit(step);

  }

  optionChecked(option: any) {
    if (this.interests) {
      return option.value === this.interests ? true : false;
    } else {
      return false;
    }
  }

  ngOnDestroy(): void {
    this.interestsState.unsubscribe();
  }


}
