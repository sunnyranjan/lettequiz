import {Component, OnInit} from '@angular/core';
import {TrackQuizService} from '../../../services/track-quiz.service';
import {Activity} from '../../../models/activity';
import {firstStepOptions} from '../../../models/first-step-options';


@Component({
  selector: 'app-ergebnisse',
  templateUrl: './ergebnisse.component.html',
  styleUrls: ['./ergebnisse.component.scss']
})
export class ErgebnisseComponent implements OnInit {

  interests: string;
  personType: string;
  targetGroupString: string;
  targetGroup: string[];
  activities: any;

  letteType: string;
  private personTypeOptions: Array<any>;
  allRecommendationsArray: Array<any>;


  constructor(private trackQuiz: TrackQuizService) {
    this.personType = this.trackQuiz.getFirstStepChoice();
    this.targetGroupString = this.trackQuiz.getSecondStepChoice();
    this.interests = this.trackQuiz.getThirdStepChoice();
    this.activities = Activity.activities;
    this.personTypeOptions = firstStepOptions.options;
  }

  ngOnInit() {
    this.modifyUserOptions();


  }

  modifyUserOptions(): void {
    // workaround for repeating options
    if (this.targetGroupString === 'familie') {
      this.targetGroupString = 'erwachsene';
    }
    if (this.targetGroupString === 'schueler') {

      this.targetGroupString = 'jugendliche';
    }

    this.findLetteType();
  }

  findLetteType(): void {
    this.targetGroup = this.targetGroupString.split(',');
    const letteType = this.personTypeOptions.filter(this.findPersonType);
    this.letteType = letteType.map((item) => item.personDescription).join(' und ');
    this.findFinalRecommendations();
  }

  findFinalRecommendations(): void {
    const personTypeActivity = this.activities.filter(this.filterPersonType);
    const targetGroupActivity = this.activities.filter(this.filterTargetGroup);
    const interestsActivity = this.activities.filter(this.filterInterests);
    const personTypeTargetGroupActivity = personTypeActivity.filter(this.filterTargetGroup);
    const allActivity = personTypeTargetGroupActivity.filter(this.filterInterests);
    const expandOtherTables = allActivity.length > 0 ? false : true;
    this.allRecommendationsArray = [
      {
        keywords: ` ${this.personType} ${this.targetGroupString} ${this.interests} `,
        expanded: true,
        activity: allActivity
      },
      {
        keywords: `${this.personType}`,
        expanded: expandOtherTables,
        activity: personTypeActivity
      },
      {
        keywords: `${this.targetGroupString}`,
        expanded: expandOtherTables,
        activity: targetGroupActivity
      },
      {
        keywords: `${this.interests}`,
        expanded: expandOtherTables,
        activity: interestsActivity
      },
    ];

  }

  findPersonType = (personType) => {
    if (personType.value === this.personType) {
      return personType.personDescription;
    }

  }

  filterPersonType = (activity) => {
    for (const item of activity.personType) {
      if (item === this.personType) {
        return activity;
      }
    }
  }

  filterTargetGroup = (activity) => {
    console.log(activity);
    for (const item of activity.targetGroup) {
      if (this.targetGroup.indexOf(item) > -1) {
        return activity;
      }
    }
  }


  filterInterests = (activity) => {
    for (const item of activity.interests) {
      if (item === this.interests) {
        return activity;
      }
    }
  }

}
