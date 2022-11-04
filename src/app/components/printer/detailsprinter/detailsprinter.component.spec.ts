import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsprinterComponent } from './detailsprinter.component';

describe('DetailsprinterComponent', () => {
  let component: DetailsprinterComponent;
  let fixture: ComponentFixture<DetailsprinterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsprinterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsprinterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
