import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZweiteSchrittComponent } from './zweite-schritt.component';

describe('ZweiteSchrittComponent', () => {
  let component: ZweiteSchrittComponent;
  let fixture: ComponentFixture<ZweiteSchrittComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZweiteSchrittComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZweiteSchrittComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
