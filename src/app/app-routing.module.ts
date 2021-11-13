import { PaystackComponent } from './paystack/paystack.component';
import { OrderpoolComponent } from './orderpool/orderpool.component';
import { RegisterComponent } from './authentication/register/register.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './authentication/login/login.component';
import { SellerdashboardComponent } from './sellerdashboard/sellerdashboard.component';

const routes: Routes = [
  { path:'',component: HomeComponent },
  { path:'Dashboard',component: DashboardComponent },
  { path:'Login',component: LoginComponent },
  { path:'Register',component: RegisterComponent },
  { path:'orderpool',component: OrderpoolComponent },
  { path:'Seller dashboard',component: SellerdashboardComponent },
  { path:'Dashboard/payment',component: PaystackComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[]
})
export class AppRoutingModule { 


}
