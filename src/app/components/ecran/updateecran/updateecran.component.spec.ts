import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateecranComponent } from './updateecran.component';

describe('UpdateecranComponent', () => {
  let component: UpdateecranComponent;
  let fixture: ComponentFixture<UpdateecranComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateecranComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateecranComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
