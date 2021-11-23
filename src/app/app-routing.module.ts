import { PaystackComponent } from './paystack/paystack.component';
import { OrderpoolComponent } from './orderpool/orderpool.component';
import { RegisterComponent } from './authentication/register/register.component';
import { HomeComponent } from './home/home.component';
import { Component, NgModule, Type } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './authentication/login/login.component';
import { SellerdashboardComponent } from './sellerdashboard/sellerdashboard.component';
import { AccountprofileComponent } from './accountprofile/accountprofile.component';
import { ResendEmailComponent } from './resend-email/resend-email.component'
import { AuthGuard } from './_services/auth.guard';
const routes: Routes = [
  { path:'',component: HomeComponent },
  { path:'Dashboard',component: DashboardComponent, canActivate: [AuthGuard]  },
  { path:'Login',component: LoginComponent },
  { path:'Register',component: RegisterComponent },
  { path:'orderpool',component: OrderpoolComponent , canActivate: [AuthGuard] },
  { path:'Sellerdashboard',component: SellerdashboardComponent, canActivate: [AuthGuard]  },
  { path:'Dashboard/payment',component: PaystackComponent, canActivate: [AuthGuard]  },
  { path:'Accountprofile',component: AccountprofileComponent, canActivate: [AuthGuard]  },
  { path:'Resend/email',component: ResendEmailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[]
})
export class AppRoutingModule { 


}

