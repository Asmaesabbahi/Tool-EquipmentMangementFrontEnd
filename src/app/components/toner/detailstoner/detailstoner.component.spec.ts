import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailstonerComponent } from './detailstoner.component';

describe('DetailstonerComponent', () => {
  let component: DetailstonerComponent;
  let fixture: ComponentFixture<DetailstonerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailstonerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailstonerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
