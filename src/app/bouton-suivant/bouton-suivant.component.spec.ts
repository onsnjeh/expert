import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoutonSuivantComponent } from './bouton-suivant.component';

describe('BoutonSuivantComponent', () => {
  let component: BoutonSuivantComponent;
  let fixture: ComponentFixture<BoutonSuivantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoutonSuivantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoutonSuivantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
