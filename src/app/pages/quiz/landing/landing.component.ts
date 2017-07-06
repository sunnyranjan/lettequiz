import {AfterViewChecked, Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit, AfterViewChecked {
  @Output() nextStep: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }
  ngAfterViewChecked() {
    window.scrollTo(0, 0);
  }
  goNextStep(step: number) {
    this.nextStep.emit(step);
    window.scrollTo(0, 0);
  }

}
