import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullfilesComponent } from './fullfiles.component';

describe('FullfilesComponent', () => {
  let component: FullfilesComponent;
  let fixture: ComponentFixture<FullfilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullfilesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FullfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
