import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCategoryPageComponent } from './list-category-page.component';

describe('ListCategoryPageComponent', () => {
  let component: ListCategoryPageComponent;
  let fixture: ComponentFixture<ListCategoryPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCategoryPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListCategoryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
