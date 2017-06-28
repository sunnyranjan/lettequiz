import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {secondStepOptions} from '../../../models/second-step-options';
import {Subscription} from "rxjs/Subscription";
import {TrackQuizService} from "app/services/track-quiz.service";

@Component({
  selector: 'app-zweite-schritt',
  templateUrl: './zweite-schritt.component.html',
  styleUrls: ['./zweite-schritt.component.css']
})
export class ZweiteSchrittComponent implements OnInit,OnDestroy  {
  @Output() nextStep: EventEmitter<number> = new EventEmitter<number>();
  @Output() previousStep: EventEmitter<number> = new EventEmitter<number>();
  secondStepOptions: any;
  targetGroup: any;
  private targetGroupState: Subscription;

  constructor(private trackQuiz: TrackQuizService) {
    this.targetGroupState = this.trackQuiz.trackSecondStep$.subscribe((state: any ) => {
      this.targetGroup = state;
    });
  }


  ngOnInit() {
    this.secondStepOptions = secondStepOptions.options;
  }

  submitSecondStep(step: number) {
    this.trackQuiz.setSecondStepChoice(this.targetGroup);
    this.nextStep.emit(step);
  }

  ngOnDestroy(): void {
    this.targetGroupState.unsubscribe();
  }

}
