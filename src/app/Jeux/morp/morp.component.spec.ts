import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MorpComponent } from './morp.component';

describe('MorpComponent', () => {
  let component: MorpComponent;
  let fixture: ComponentFixture<MorpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MorpComponent]
    });
    fixture = TestBed.createComponent(MorpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
