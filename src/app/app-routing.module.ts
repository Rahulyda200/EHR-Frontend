import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { HealthCareComponent } from './health-care/health-care.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { AppointmentDetailsComponent } from './appointment-details/appointment-details.component';
// import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  // { path: 'footer', component: FooterComponent },
  { path:'appointmant-details', component:AppointmentDetailsComponent},
  { path: 'user-login', component: UserLoginComponent},
  { path: 'healthcare', component: HealthCareComponent},
  { path: 'personal-info', component: PersonalInfoComponent},

  { path: '', redirectTo: '/home', pathMatch: 'full' }, 
  { path: '**', redirectTo: '/home' } ,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
