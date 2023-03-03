import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleComponent } from './article/article.component';
import { BarreRechComponent } from './barre-rech/barre-rech.component';
import { BarreRechercheJourComponent } from './barre-recherche-jour/barre-recherche-jour.component';
import { BarreRechercheComponent } from './barre-recherche/barre-recherche.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FileinfComponent } from './fileinf/fileinf.component';
import { FilesComponent } from './files/files.component';
import { FullfilesComponent } from './fullfiles/fullfiles.component';
import { FullticketComponent } from './fullticket/fullticket.component';
import { HomeComponent } from './home/home.component';
import { ListArticleComponent } from './list-article/list-article.component';
import { ListCategComponent } from './list-categ/list-categ.component';
import { ListCategoryPageComponent } from './list-category-page/list-category-page.component';
import { ListCategoryComponent } from './list-category/list-category.component';
import { ListFileComponent } from './list-file/list-file.component';
import { MessageComponent } from './message/message.component';
import { MeunCategComponent } from './meun-categ/meun-categ.component';
import { PageCategoryFileComponent } from './page-category-file/page-category-file.component';
import { PageCategoryComponent } from './page-category/page-category.component';
import { PageFiscalComponent } from './page-fiscal/page-fiscal.component';
import { PageJuridiqueComponent } from './page-juridique/page-juridique.component';
import { PageSocialComponent } from './page-social/page-social.component';
import { SidebarComponent } from './sidebar/sidebar.component';

const routes: Routes = [
  {path:'' , component : DashboardComponent },
  {path:"expert/message" , component : MessageComponent },
  {path:"sidebae-expert",component:SidebarComponent},
  {path:"expert/News",component:FilesComponent},
  {path:'expert/fullfile',component:FullfilesComponent},
  {path:'expert/fullticket',component:FullticketComponent},
  {path:'expert/inf',component:FileinfComponent}, 
  {path:'expert/home',component:HomeComponent},
  {path:'expert/barre-recherche',component:BarreRechercheComponent},
  {path:'expert/barre-recherche-jour',component:BarreRechercheJourComponent},
  {path:'expert/barre-rech',component:BarreRechComponent},
  {path:'expert/list-file',component:ListFileComponent},
  {path:'expert/menu-categ',component:MeunCategComponent},
  {path:'expert/list-categ',component:ListCategComponent},
  {path:'expert/list-article',component:ListArticleComponent},
  {path:'expert/article',component:ArticleComponent},
  {path:'expert/article/social',component:PageSocialComponent},
  {path:'expert/article/juridique',component:PageJuridiqueComponent},
  {path:'expert/article/fiscal',component:PageFiscalComponent},
  {path:'expert/list-category',component:ListCategoryComponent},
  {path:'expert/list-category-page',component:ListCategoryPageComponent},
  {path:'expert/page-category',component:PageCategoryComponent},
  {path:'expert/page-category-file',component:PageCategoryFileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
