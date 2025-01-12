import { Routes } from '@angular/router';
import { StartFrameworkComponent } from './start-framework/start-framework.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
  {path:'',redirectTo:'startFramework',pathMatch:'full' ,title:'startFramework'},
  {path:'home', component:StartFrameworkComponent , title:'home'},
  {path:'About', component:AboutComponent , title:'About'},
  {path:'portfolio', component:PortfolioComponent, title:'portfolio'},
  {path:'Contact',component:ContactComponent, title:'Contact'},
  {path:'**',component:NotFoundComponent, title:'notfound'}
];
