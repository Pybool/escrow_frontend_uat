import { AuthService } from './_services/auth.service';
import { ReservationService } from './_services/reservation.service';
import {ServiceLocator} from './locator.service';
import { Injector,NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CourseComponent } from './course/course.component';
import { LoginComponent } from './authentication/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SellerdashboardComponent } from './sellerdashboard/sellerdashboard.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './authentication/register/register.component';
import { OrderpoolComponent } from './orderpool/orderpool.component';
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EkoModalComponent } from './eko-modal/eko-modal.component';
import { PaystackComponent } from './paystack/paystack.component';
import { AccountprofileComponent } from './accountprofile/accountprofile.component';
import { ResendEmailComponent } from './resend-email/resend-email.component';
import { SucessTickComponent } from './sucess-tick/sucess-tick.component';
import { AlertComponent } from './_alert/alert.component';
import { CountdownModule } from 'ngx-countdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TimerComponent } from './timer/timer.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    LoginComponent,
    DashboardComponent,
    SellerdashboardComponent,
    HomeComponent,
    RegisterComponent,
    OrderpoolComponent,
    EkoModalComponent,
    PaystackComponent,
    AccountprofileComponent,
    ResendEmailComponent,
    SucessTickComponent,
    AlertComponent,
    TimerComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CountdownModule
  ],
  providers: [AuthService,ReservationService,NgbActiveModal],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private injector: Injector){    // Create global Service Injector.
    ServiceLocator.injector = this.injector;
}
 }
