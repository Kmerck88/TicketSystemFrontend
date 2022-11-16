import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ticket } from './ticket';



@Injectable({
  providedIn: 'root'
})
export class TicketSystemService {
  backend: string = 'http://localhost:7289/api';

  constructor(private httpclient: HttpClient) { }

  getTickets = (): Observable<Ticket[]> => {
    return this.httpclient.get<Ticket[]>(`${this.backend}/Ticket/alltickets`);
  }
}
