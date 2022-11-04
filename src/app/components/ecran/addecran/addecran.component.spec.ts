import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddecranComponent } from './addecran.component';

describe('AddecranComponent', () => {
  let component: AddecranComponent;
  let fixture: ComponentFixture<AddecranComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddecranComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddecranComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
