import { Component, OnInit } from '@angular/core';
import { Bookmark } from '../bookmark';
import { TicketSystemService } from '../ticket-system.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-bookmark-list',
  templateUrl: './bookmark-list.component.html',
  styleUrls: ['./bookmark-list.component.css']
})
export class BookmarkListComponent implements OnInit {

  constructor(private ticketService: TicketSystemService) { }



  userId: string = '';
  bookmarks: Bookmark[] = [];
  userBookmarks: boolean = false;

  ngOnInit(): void {
    this.ticketService.getBookmarks().subscribe((response: Bookmark[]) => {
      console.log(response);
      this.bookmarks = response;
    });
  }

  getBookmarksForUserId = (): void => {
    console.log(this.userId);
    this.ticketService.getBookmarksFromUser(this.userId).subscribe((response: Bookmark[]) => {
      console.log(response);
      this.bookmarks = response;
    });
  }
}
