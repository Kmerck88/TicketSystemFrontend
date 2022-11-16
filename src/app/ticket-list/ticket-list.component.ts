import { Component, OnInit } from '@angular/core';
import { Ticket } from '../ticket';
import { TicketSystemService } from '../ticket-system.service';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent implements OnInit {


  // Stuck on this one to display the tickets 
  constructor(private ticketService: TicketSystemService) { }

  newTicket: Ticket = {} as Ticket;
  showForm: boolean = false;
  showOpens: boolean = false;
  byStatus: Ticket[] = [];

  tickets: Ticket[] = [];
  ngOnInit(): void {
    this.ticketService.getTickets().subscribe((response: Ticket[]) => {
      console.log(response);
      this.tickets = response;
    });
  }

  NewTicket(createdTicket: Ticket): void {

    this.tickets.push(createdTicket)

  }

  ToggleDisplay() {
    this.showForm = !this.showForm;
  }

  ToggleStatus() {
    this.showOpens = !this.showOpens;
    this.ticketService.getTickets().subscribe((response: Ticket[]) => this.byStatus = response)
    console.log(this.byStatus)
  }

}