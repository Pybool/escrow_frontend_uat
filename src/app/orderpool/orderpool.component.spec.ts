import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderpoolComponent } from './orderpool.component';

describe('OrderpoolComponent', () => {
  let component: OrderpoolComponent;
  let fixture: ComponentFixture<OrderpoolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderpoolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderpoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
