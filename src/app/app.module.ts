import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuListComponent } from './menu-list/menu-list.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { TicketDetailsComponent } from './ticket-details/ticket-details.component';
import { TicketListComponent } from './ticket-list/ticket-list.component';



@NgModule({
  declarations: [
    AppComponent,
    MenuListComponent,
    HomeComponent,
    TicketDetailsComponent, 
    TicketListComponent

  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FormsModule, 
  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
