import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsecranComponent } from './detailsecran.component';

describe('DetailsecranComponent', () => {
  let component: DetailsecranComponent;
  let fixture: ComponentFixture<DetailsecranComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsecranComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsecranComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
