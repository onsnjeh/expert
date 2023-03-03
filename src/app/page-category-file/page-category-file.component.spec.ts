import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCategoryFileComponent } from './page-category-file.component';

describe('PageCategoryFileComponent', () => {
  let component: PageCategoryFileComponent;
  let fixture: ComponentFixture<PageCategoryFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageCategoryFileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageCategoryFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
