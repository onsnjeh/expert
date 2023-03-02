import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageFiscalComponent } from './page-fiscal.component';

describe('PageFiscalComponent', () => {
  let component: PageFiscalComponent;
  let fixture: ComponentFixture<PageFiscalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageFiscalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageFiscalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
