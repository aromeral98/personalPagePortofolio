import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { CertificationsComponent } from './pages/certifications/certifications.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';


const routes: Routes = [
  {path:'',component:HomeComponent,children:[
    {path:'about',component:AboutComponent},
    {path:'certifications',component:CertificationsComponent},
    {path:'contact',component:ContactComponent},
    {path:'portfolio',component:PortfolioComponent},
    {path:'**',redirectTo:'about'},
  ]},
  
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
