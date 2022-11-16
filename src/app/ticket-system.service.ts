import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ticket } from 'src/app/ticket';



@Injectable({
  providedIn: 'root'
})
export class TicketSystemService {
  
  backend: string = 'https://localhost:7289/api/Ticket/alltickets';

  constructor(private httpclient: HttpClient) { }

  getTickets = (): Observable<Ticket[]> => {
    //return this.httpclient.get<Ticket[]>(`${this.backend}/alltickets`);
    return this.httpclient.get<Ticket[]>(this.backend)
  }
}
