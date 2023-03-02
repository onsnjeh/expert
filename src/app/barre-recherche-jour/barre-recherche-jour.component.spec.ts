import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarreRechercheJourComponent } from './barre-recherche-jour.component';

describe('BarreRechercheJourComponent', () => {
  let component: BarreRechercheJourComponent;
  let fixture: ComponentFixture<BarreRechercheJourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarreRechercheJourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarreRechercheJourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
