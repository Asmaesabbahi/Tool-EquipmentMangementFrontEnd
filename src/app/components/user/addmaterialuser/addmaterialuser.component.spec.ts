import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmaterialuserComponent } from './addmaterialuser.component';

describe('AddmaterialuserComponent', () => {
  let component: AddmaterialuserComponent;
  let fixture: ComponentFixture<AddmaterialuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddmaterialuserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddmaterialuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
