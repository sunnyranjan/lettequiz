import {AfterViewChecked, Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {firstStepOptions} from '../../../models/first-step-options';
import {TrackQuizService} from '../../../services/track-quiz.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-erste-schritt',
  templateUrl: './erste-schritt.component.html',
  styleUrls: ['./erste-schritt.component.scss']
})
export class ErsteSchrittComponent implements OnInit, OnDestroy, AfterViewChecked {


  @Output() nextStep: EventEmitter<number> = new EventEmitter<number>();
  @Output() previousStep: EventEmitter<number> = new EventEmitter<number>();
  firstStepOptions: any;
  personType: any;
  private personTypeState: Subscription;

  constructor(private trackQuiz: TrackQuizService) {
    this.personTypeState = this.trackQuiz.trackFirstStep$.subscribe((state: any ) => {
      this.personType = state;
    });
    this.personType = this.trackQuiz.getFirstStepChoice();
  }

  ngOnInit() {
    this.firstStepOptions = firstStepOptions.options;

  }

  ngAfterViewChecked() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0; // For Chrome, Safari and Opera
    document.documentElement.scrollTop = 0; // For IE and Firefox
  }

  goPreviousStep(step: number) {
    this.trackQuiz.setFirstStepChoice(this.personType);
    this.previousStep.emit(step);

  }

  goNextStep(step: number) {
    this.trackQuiz.setFirstStepChoice(this.personType);
    this.nextStep.emit(step);

  }
  optionChecked(option: any) {
    if (this.personType) {
      return option.value === this.personType ? true : false;
    } else {
      return false;
    }
  }

  ngOnDestroy(): void {
    this.personTypeState.unsubscribe();
  }

}
