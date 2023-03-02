import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoutonCloseComponent } from './bouton-close.component';

describe('BoutonCloseComponent', () => {
  let component: BoutonCloseComponent;
  let fixture: ComponentFixture<BoutonCloseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoutonCloseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoutonCloseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
