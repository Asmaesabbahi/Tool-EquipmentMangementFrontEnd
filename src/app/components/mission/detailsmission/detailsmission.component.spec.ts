import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsmissionComponent } from './detailsmission.component';

describe('DetailsmissionComponent', () => {
  let component: DetailsmissionComponent;
  let fixture: ComponentFixture<DetailsmissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsmissionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
