import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EkoModalComponent } from './eko-modal.component';

describe('EkoModalComponent', () => {
  let component: EkoModalComponent;
  let fixture: ComponentFixture<EkoModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EkoModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EkoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
