import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarreRechComponent } from './barre-rech.component';

describe('BarreRechComponent', () => {
  let component: BarreRechComponent;
  let fixture: ComponentFixture<BarreRechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarreRechComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarreRechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
