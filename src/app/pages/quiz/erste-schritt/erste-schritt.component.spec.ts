import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErsteSchrittComponent } from './erste-schritt.component';

describe('ErsteSchrittComponent', () => {
  let component: ErsteSchrittComponent;
  let fixture: ComponentFixture<ErsteSchrittComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErsteSchrittComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErsteSchrittComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
