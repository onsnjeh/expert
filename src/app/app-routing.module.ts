import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FileinfComponent } from './fileinf/fileinf.component';
import { FilesComponent } from './files/files.component';
import { FullfilesComponent } from './fullfiles/fullfiles.component';
import { FullticketComponent } from './fullticket/fullticket.component';
import { HomeComponent } from './home/home.component';
import { MessageComponent } from './message/message.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TicketsComponent } from './tickets/tickets.component';

const routes: Routes = [
  {path:'' , component : DashboardComponent },
  {path:"expert/message" , component : MessageComponent },
  {path:"sidebae-expert",component:SidebarComponent},
  {path:"expert/ticket",component:TicketsComponent},
  {path:"expert/News",component:FilesComponent},
  {path:'expert/fullfile',component:FullfilesComponent},
  {path:'expert/fullticket',component:FullticketComponent},
  {path:'expert/inf',component:FileinfComponent}, 
  {path:'expert/home',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
