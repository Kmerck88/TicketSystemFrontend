import { Component, OnInit } from '@angular/core';
import { Ticket } from 'src/app/ticket';
import { TicketSystemService } from '../ticket-system.service';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css']
})
export class MenuListComponent implements OnInit {
  tickets: Ticket[] = []

  constructor(private services: TicketSystemService) { }


  ngOnInit(): void {
    this.loadTickets();
  }

  loadTickets = (): void => {
    this.services.getTickets().subscribe((data: Ticket[]) => this.tickets = data);
  }
}


