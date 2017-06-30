import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
  stepNumber: number;

  constructor() { }

  ngOnInit() {
    this.stepNumber = 0;
  }
  incrementStep() {
    this.stepNumber++;

  }
  decrementStep() {
    this.stepNumber--;
  }

}
