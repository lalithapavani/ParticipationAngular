import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddparticipationComponent } from './addparticipation.component';

describe('AddparticipationComponent', () => {
  let component: AddparticipationComponent;
  let fixture: ComponentFixture<AddparticipationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddparticipationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddparticipationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
