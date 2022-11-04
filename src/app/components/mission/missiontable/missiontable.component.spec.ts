import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissiontableComponent } from './missiontable.component';

describe('MissiontableComponent', () => {
  let component: MissiontableComponent;
  let fixture: ComponentFixture<MissiontableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MissiontableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MissiontableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
