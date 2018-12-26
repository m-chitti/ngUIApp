import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { transHistoryComponent } from './transHistory.component';

describe('transHistoryComponent', () => {
  let component: transHistoryComponent;
  let fixture: ComponentFixture<transHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ transHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(transHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
