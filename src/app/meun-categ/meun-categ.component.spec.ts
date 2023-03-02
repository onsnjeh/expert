import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeunCategComponent } from './meun-categ.component';

describe('MeunCategComponent', () => {
  let component: MeunCategComponent;
  let fixture: ComponentFixture<MeunCategComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeunCategComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeunCategComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
