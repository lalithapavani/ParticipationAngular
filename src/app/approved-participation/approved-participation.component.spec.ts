import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovedParticipationComponent } from './approved-participation.component';

describe('ApprovedParticipationComponent', () => {
  let component: ApprovedParticipationComponent;
  let fixture: ComponentFixture<ApprovedParticipationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApprovedParticipationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApprovedParticipationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
