import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
@Injectable()
export class TrackQuizService {
  // Observable string sources
  private trackFirstStep = new Subject<any>();
  private trackSecondStep = new Subject<any>();
  private trackThirdStep = new Subject<any>();

  // Observable string streams
  trackFirstStep$ = this.trackFirstStep.asObservable();
  trackSecondStep$ = this.trackSecondStep.asObservable();
  trackThirdStep$ = this.trackThirdStep.asObservable();
  private firstStepChoice: any;
  private secondStepChoice: any;
  private thirdStepChoice: any;

  setFirstStepChoice(choice: any) {
    this.firstStepChoice = choice;
    this.trackFirstStep.next(choice);
  }

  getFirstStepChoice() {
    return this.firstStepChoice;
  }

  setSecondStepChoice(choice: any) {
    this.secondStepChoice = choice;
    this.trackSecondStep.next(choice);
  }

  getSecondStepChoice() {
    return this.secondStepChoice;
  }
  setThirdStepChoice(choice: any) {
    this.thirdStepChoice = choice;
    this.trackThirdStep.next(choice);
  }

  getThirdStepChoice() {
    return this.thirdStepChoice;
  }


  constructor() { }

}
