import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileinfComponent } from './fileinf.component';

describe('FileinfComponent', () => {
  let component: FileinfComponent;
  let fixture: ComponentFixture<FileinfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileinfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FileinfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
