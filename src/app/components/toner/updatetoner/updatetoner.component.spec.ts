import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatetonerComponent } from './updatetoner.component';

describe('UpdatetonerComponent', () => {
  let component: UpdatetonerComponent;
  let fixture: ComponentFixture<UpdatetonerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatetonerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatetonerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
