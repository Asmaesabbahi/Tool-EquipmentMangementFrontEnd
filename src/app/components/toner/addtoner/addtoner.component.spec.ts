import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtonerComponent } from './addtoner.component';

describe('AddtonerComponent', () => {
  let component: AddtonerComponent;
  let fixture: ComponentFixture<AddtonerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddtonerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddtonerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
