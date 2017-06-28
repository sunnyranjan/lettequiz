import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {firstStepOptions} from '../../../models/first-step-options';
import {TrackQuizService} from '../../../services/track-quiz.service';
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-erste-schritt',
  templateUrl: './erste-schritt.component.html',
  styleUrls: ['./erste-schritt.component.css']
})
export class ErsteSchrittComponent implements OnInit, OnDestroy {


  @Output() nextStep: EventEmitter<number> = new EventEmitter<number>();
  @Output() previousStep: EventEmitter<number> = new EventEmitter<number>();
  firstStepOptions: any;
  personType: any;
  private personTypeState: Subscription;

  constructor(private trackQuiz: TrackQuizService) {
    this.personTypeState = this.trackQuiz.trackFirstStep$.subscribe((state: any ) => {
      this.personType = state;
    });
  }

  ngOnInit() {
    this.firstStepOptions = firstStepOptions.options;

  }

  submitFirstStep(step: number) {
    this.trackQuiz.setFirstStepChoice(this.personType);
    this.nextStep.emit(step);
  }

  ngOnDestroy(): void {
    this.personTypeState.unsubscribe();
  }

}
