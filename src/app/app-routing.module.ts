import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './common/authentication/login/login.component';
import { DashboardComponent } from './common/home/dashboard/dashboard.component';
import { GuardsGuard } from './common/guards/guards.guard';
import { WatchvideoComponent } from './common/home/watchvideo/watchvideo.component';
import { LandingComponent } from './landingpage/landing/landing.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path:'dashboard', component: DashboardComponent},
  {path:'videos', component:LandingComponent, canActivate:[GuardsGuard]},
  {path:'**',redirectTo:'videos',pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
