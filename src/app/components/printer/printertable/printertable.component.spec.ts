import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintertableComponent } from './printertable.component';

describe('PrintertableComponent', () => {
  let component: PrintertableComponent;
  let fixture: ComponentFixture<PrintertableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintertableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintertableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
