import { Component, OnInit } from '@angular/core';
import { Bookmark } from '../bookmark';
import { TicketSystemService } from '../ticket-system.service';

@Component({
  selector: 'app-bookmark-list',
  templateUrl: './bookmark-list.component.html',
  styleUrls: ['./bookmark-list.component.css']
})
export class BookmarkListComponent implements OnInit {

  constructor(private ticketService: TicketSystemService) { }

  userId: string = "admin";
  bookmarks: Bookmark[] = [];
  userBookmarks: boolean = false;

  ngOnInit(): void {
    this.ticketService.getBookmarks().subscribe((response: Bookmark[]) => {
      console.log(response);
      this.bookmarks = response;
    });
  }

  getBookmarksForUser = (userId: string): void => {
    this.ticketService.getBookmarksFromUser(userId).subscribe((response: Bookmark[]) => {
      console.log(response);
      this.bookmarks = response;
    });
  }
}
