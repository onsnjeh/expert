import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullticketComponent } from './fullticket.component';

describe('FullticketComponent', () => {
  let component: FullticketComponent;
  let fixture: ComponentFixture<FullticketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullticketComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FullticketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
