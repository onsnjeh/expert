import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeListTicketComponent } from './home-list-ticket.component';

describe('HomeListTicketComponent', () => {
  let component: HomeListTicketComponent;
  let fixture: ComponentFixture<HomeListTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeListTicketComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeListTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
