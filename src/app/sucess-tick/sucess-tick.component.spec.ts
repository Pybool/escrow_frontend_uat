import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SucessTickComponent } from './sucess-tick.component';

describe('SucessTickComponent', () => {
  let component: SucessTickComponent;
  let fixture: ComponentFixture<SucessTickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SucessTickComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SucessTickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
