import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-result-banner',
  templateUrl: './result-banner.component.html',
  styleUrls: ['./result-banner.component.scss']
})
export class ResultBannerComponent implements OnInit {
  @Input() bannerText;

  constructor() { }

  ngOnInit() {
  }

}
