import { Component, Input } from '@angular/core';
import { ticket } from '../model/ticket.model';

// interface ticket {
//   ticket:string
// 	nameticket:string;
// 	priority: string;
// 	category: string;
//   date:string;
// }

// const COUNTRIES: ticket[] = [
// 	{
// 		ticket:'1',
//     nameticket: 'Ticket1',
// 		priority: 'normale',
// 		category: 'juridique',
//     date:'12/11/2023'
// 	},
// 	{
// 		ticket:'2',
//     nameticket: 'Ticket2',
// 		priority: 'urgent',
// 		category: 'fiscal',
//     date:'12/11/2023'
// 	},
// 	{
// 		ticket:'3',
//     nameticket: 'Ticket3',
// 		priority: 'normale',
// 		category: 'social',
//     date:'12/11/2023'
// 	},
// 	{
// 		ticket:'4',
//     nameticket: 'Ticket4',
// 		priority: 'normale',
// 		category: 'juridique',
//     date:'12/11/2023'
// 	},
// ];

@Component({
  selector: 'app-list-ticket-dernier',
  templateUrl: './list-ticket-dernier.component.html',
  styleUrls: ['./list-ticket-dernier.component.css']
})
export class ListTicketDernierComponent {
	// countries = COUNTRIES;
	@Input() item2: ticket;
	constructor() {
		this.item2 = {
      id: 0,
      nom: '' ,
      priority: '',
      category: '',
      date:''
		};
	}
	ngOnInit(): void {
		console.log(this.item2);
	}


}
