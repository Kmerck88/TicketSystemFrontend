import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Ticket } from '../ticket';
import { TicketSystemService } from '../ticket-system.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
@Output() ticketSave = new EventEmitter<Ticket>();

  constructor(private ticketService: TicketSystemService) { }

  tickets: Ticket[] = [];
  ngOnInit(): void {
    this.ticketService.getTickets().subscribe((response: Ticket[]) => {
      console.log(response);
      this.tickets = response;
    });
  }

 
  name: string = '';
  category: string = '';
  detail: string = '';
  openedByName: string = '';
  openedByEmail: string = '';
  created: Date = new Date(); 
  completedByEmail: string = ''
  completedByName: string = ''
  completed: boolean = false
  resolution: string = ''

  submit = (f: NgForm): void => {
    var ticket: Ticket = {
      name: this.name,
      category: this.category,
      detail: this.detail,
      openedByEmail: this.openedByEmail,
      openedByName: this.openedByName,
      created: this.created,
      completedByEmail: this.completedByEmail,
      completedByName: this.completedByName,
      completed: this.completed,
      resolution: this.resolution
    }
    this.ticketService.createTicket(ticket).subscribe((response: Ticket) => {
      console.log(response);
    });;
  }
}
