import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DritteSchrittComponent } from './dritte-schritt.component';

describe('DritteSchrittComponent', () => {
  let component: DritteSchrittComponent;
  let fixture: ComponentFixture<DritteSchrittComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DritteSchrittComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DritteSchrittComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
