import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultPanelsComponent } from './result-panels.component';

describe('ResultPanelsComponent', () => {
  let component: ResultPanelsComponent;
  let fixture: ComponentFixture<ResultPanelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultPanelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultPanelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
