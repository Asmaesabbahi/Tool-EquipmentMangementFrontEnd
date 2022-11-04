import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PcdetailComponent } from './pcdetail.component';

describe('PcdetailComponent', () => {
  let component: PcdetailComponent;
  let fixture: ComponentFixture<PcdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PcdetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PcdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
