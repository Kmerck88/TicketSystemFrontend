import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ticket } from 'src/app/ticket';
import { Bookmark } from './bookmark';
import { NgForm } from '@angular/forms';



@Injectable({
  providedIn: 'root'
})
export class TicketSystemService {
  
  backend: string = 'https://localhost:7289/api/';

  constructor(private httpclient: HttpClient) { }

  getTickets = (): Observable<Ticket[]> => {
    //return this.httpclient.get<Ticket[]>(`${this.backend}/alltickets`);
    return this.httpclient.get<Ticket[]>(this.backend + "Ticket/alltickets")
  }

  createTicket = (ticket: Ticket): Observable<Ticket> => {
    return this.httpclient.post<Ticket>(this.backend + "Ticket/createticket",  ticket);
  }

  getBookmarks = (): Observable<Bookmark[]> => {
    return this.httpclient.get<Bookmark[]>(this.backend + "Bookmark/allbookmarks");
  }

  getBookmarksFromUser = (userId: string): Observable<Bookmark[]> => {
    return this.httpclient.get<Bookmark[]>(`${this.backend}Bookmark/viewbookmarks/${userId}`)
  }

  // //BOOKMARK SERVICES
  // addBookmark = (ticketId: number, userId: string): Observable<Bookmark> => {
  //   console.log("and i made it here");
  //   return this.httpclient.get<Bookmark>(`${this.backend}Bookmark/addtobookmark/${ticketId}/${userId}`)
  //   //https://localhost:7289/api/Bookmark/addtobookmark/1/{userid}
  // }
}
