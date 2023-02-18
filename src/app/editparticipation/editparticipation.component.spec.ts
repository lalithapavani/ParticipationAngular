import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditparticipationComponent } from './editparticipation.component';

describe('EditparticipationComponent', () => {
  let component: EditparticipationComponent;
  let fixture: ComponentFixture<EditparticipationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditparticipationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditparticipationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
