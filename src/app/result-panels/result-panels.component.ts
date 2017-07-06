import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-result-panels',
  templateUrl: './result-panels.component.html',
  styleUrls: ['./result-panels.component.scss']
})
export class ResultPanelsComponent implements OnInit {
  @Input() activityTable = {
    keywords: '',
    expanded: false,
    activity: []
  };

  constructor() { }

  ngOnInit() {
  }

}
