import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TonertableComponent } from './tonertable.component';

describe('TonertableComponent', () => {
  let component: TonertableComponent;
  let fixture: ComponentFixture<TonertableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TonertableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TonertableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
