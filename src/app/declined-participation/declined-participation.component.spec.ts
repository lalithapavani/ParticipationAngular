import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeclinedParticipationComponent } from './declined-participation.component';

describe('DeclinedParticipationComponent', () => {
  let component: DeclinedParticipationComponent;
  let fixture: ComponentFixture<DeclinedParticipationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeclinedParticipationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeclinedParticipationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
