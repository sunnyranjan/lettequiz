import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultBannerComponent } from './result-banner.component';

describe('ResultBannerComponent', () => {
  let component: ResultBannerComponent;
  let fixture: ComponentFixture<ResultBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
