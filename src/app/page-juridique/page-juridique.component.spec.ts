import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageJuridiqueComponent } from './page-juridique.component';

describe('PageJuridiqueComponent', () => {
  let component: PageJuridiqueComponent;
  let fixture: ComponentFixture<PageJuridiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageJuridiqueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageJuridiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
