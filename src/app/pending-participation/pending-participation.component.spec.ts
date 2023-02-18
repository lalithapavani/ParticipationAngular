import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingParticipationComponent } from './pending-participation.component';

describe('PendingParticipationComponent', () => {
  let component: PendingParticipationComponent;
  let fixture: ComponentFixture<PendingParticipationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PendingParticipationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PendingParticipationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
