import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcrantableComponent } from './ecrantable.component';

describe('EcrantableComponent', () => {
  let component: EcrantableComponent;
  let fixture: ComponentFixture<EcrantableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcrantableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EcrantableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
