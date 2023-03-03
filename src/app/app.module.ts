import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FilesComponent } from './files/files.component';
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
import { BoutonSuivantComponent } from './bouton-suivant/bouton-suivant.component';
import { BarreRechercheComponent } from './barre-recherche/barre-recherche.component';
import { BarreRechercheJourComponent } from './barre-recherche-jour/barre-recherche-jour.component';
import { BarreRechComponent } from './barre-rech/barre-rech.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MeunCategComponent } from './meun-categ/meun-categ.component';
import { ListFileComponent } from './list-file/list-file.component';
import { ListCategComponent } from './list-categ/list-categ.component';
import { ListArticleComponent } from './list-article/list-article.component';
import { ArticleComponent } from './article/article.component';
import { TicketComponent } from './ticket/ticket.component';
import { BoutonCloseComponent } from './bouton-close/bouton-close.component';
import { PageJuridiqueComponent } from './page-juridique/page-juridique.component';
import { PageSocialComponent } from './page-social/page-social.component';
import { PageFiscalComponent } from './page-fiscal/page-fiscal.component';
import { ListDocumentComponent } from './list-document/list-document.component';
import { ListCategoryComponent } from './list-category/list-category.component';
import { ListCategoryPageComponent } from './list-category-page/list-category-page.component';
import { PageCategoryComponent } from './page-category/page-category.component';
import { PageCategoryFileComponent } from './page-category-file/page-category-file.component';
import { BoutonOpenComponent } from './bouton-open/bouton-open.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    FilesComponent,
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
    HomeListTicketComponent,
    BoutonSuivantComponent,
    BarreRechercheComponent,
    BarreRechercheJourComponent,
    BarreRechComponent,
    MeunCategComponent,
    ListFileComponent,
    ListCategComponent,
    ListArticleComponent,
    ArticleComponent,
    TicketComponent,
    BoutonCloseComponent,
    PageJuridiqueComponent,
    PageSocialComponent,
    PageFiscalComponent,
    ListDocumentComponent,
    ListCategoryComponent,
    ListCategoryPageComponent,
    PageCategoryComponent,
    PageCategoryFileComponent,
    BoutonOpenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
