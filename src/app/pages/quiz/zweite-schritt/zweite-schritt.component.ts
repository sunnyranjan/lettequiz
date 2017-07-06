import {AfterViewChecked, Component, EventEmitter, Inject, OnDestroy, OnInit, Output} from '@angular/core';
import {secondStepOptions} from '../../../models/second-step-options';
import {Subscription} from "rxjs/Subscription";
import {TrackQuizService} from "app/services/track-quiz.service";
import { DOCUMENT } from "@angular/platform-browser";

@Component({
  selector: 'app-zweite-schritt',
  templateUrl: './zweite-schritt.component.html',
  styleUrls: ['./zweite-schritt.component.scss']
})
export class ZweiteSchrittComponent implements OnInit, OnDestroy, AfterViewChecked  {
  @Output() nextStep: EventEmitter<number> = new EventEmitter<number>();
  @Output() previousStep: EventEmitter<number> = new EventEmitter<number>();
  secondStepOptions: any;
  targetGroup: any;
  private targetGroupState: Subscription;

  constructor(private trackQuiz: TrackQuizService, @Inject(DOCUMENT) private document: Document) {
    this.targetGroupState = this.trackQuiz.trackSecondStep$.subscribe((state: any ) => {
      this.targetGroup = state;
    });
    this.targetGroup = this.trackQuiz.getSecondStepChoice();
  }


  ngOnInit() {
    this.secondStepOptions = secondStepOptions.options;
  }

  ngAfterViewChecked() {
    window.scrollTo(0, 0);
    this.document.body.scrollTop = 0; // For Chrome, Safari and Opera
    this.document.documentElement.scrollTop = 0; // For IE and Firefox
  }

  goPreviousStep(step: number) {
    this.trackQuiz.setSecondStepChoice(this.targetGroup);
    this.previousStep.emit(step);

  }

  goNextStep(step: number) {
    this.trackQuiz.setSecondStepChoice(this.targetGroup);
    this.nextStep.emit(step);
  }
  optionChecked(option: any) {
    if (this.targetGroup) {
      return option.value === this.targetGroup ? true : false;
    } else {
      return false;
    }
  }

  ngOnDestroy(): void {
    this.targetGroupState.unsubscribe();
  }

}
