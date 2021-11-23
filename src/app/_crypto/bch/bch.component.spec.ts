import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BchComponent } from './bch.component';

describe('BchComponent', () => {
  let component: BchComponent;
  let fixture: ComponentFixture<BchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
