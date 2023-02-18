import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewparticipationsComponent } from './viewparticipations.component';

describe('ViewparticipationsComponent', () => {
  let component: ViewparticipationsComponent;
  let fixture: ComponentFixture<ViewparticipationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewparticipationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewparticipationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
