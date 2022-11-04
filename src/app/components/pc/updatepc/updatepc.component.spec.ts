import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatepcComponent } from './updatepc.component';

describe('UpdatepcComponent', () => {
  let component: UpdatepcComponent;
  let fixture: ComponentFixture<UpdatepcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatepcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatepcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
