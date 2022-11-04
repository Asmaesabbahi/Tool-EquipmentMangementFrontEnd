import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterieltableComponent } from './materieltable.component';

describe('MaterieltableComponent', () => {
  let component: MaterieltableComponent;
  let fixture: ComponentFixture<MaterieltableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterieltableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterieltableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
