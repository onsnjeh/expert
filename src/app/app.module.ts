import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FilesComponent } from './files/files.component';
import { TicketsComponent } from './tickets/tickets.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MessageComponent } from './message/message.component';
import { FullfilesComponent } from './fullfiles/fullfiles.component';
import { FullticketComponent } from './fullticket/fullticket.component';
import { ReponseComponent } from './reponse/reponse.component';
import { HeaderComponent } from './header/header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FileinfComponent } from './fileinf/fileinf.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { InfoProfilComponent } from './info-profil/info-profil.component';
import { HomeListTicketComponent } from './home-list-ticket/home-list-ticket.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    FilesComponent,
    TicketsComponent,
    SidebarComponent,
    MessageComponent,
    FullfilesComponent,
    FullticketComponent,
    ReponseComponent,
    HeaderComponent,
    FileinfComponent,
    HomeComponent,
    ContactComponent,
    InfoProfilComponent,
    HomeListTicketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
