import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateprinterComponent } from './updateprinter.component';

describe('UpdateprinterComponent', () => {
  let component: UpdateprinterComponent;
  let fixture: ComponentFixture<UpdateprinterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateprinterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateprinterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
