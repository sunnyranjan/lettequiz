import { Component, OnInit } from '@angular/core';
import {TrackQuizService} from '../../../services/track-quiz.service';
import {Activity} from '../../../models/activity';

@Component({
  selector: 'app-ergebnisse',
  templateUrl: './ergebnisse.component.html',
  styleUrls: ['./ergebnisse.component.css']
})
export class ErgebnisseComponent implements OnInit {

  interests: any;
  personType: any;
  targetGroup: any;

  constructor(private trackQuiz: TrackQuizService) {
    this.personType = this.trackQuiz.getFirstStepChoice();
    this.targetGroup = this.trackQuiz.getSecondStepChoice();
    this.interests = this.trackQuiz.getThirdStepChoice();
  }

  ngOnInit() {
  }

}
