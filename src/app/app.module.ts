import { CourseService } from './course/course.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { LoginComponent } from './authentication/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SellerdashboardComponent } from './sellerdashboard/sellerdashboard.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './authentication/register/register.component';
import { OrderpoolComponent } from './orderpool/orderpool.component';
import { EthereumComponent } from './_crypto/ethereum/ethereum.component';
import { BitcoinComponent } from './_crypto/bitcoin/bitcoin.component';
import { UniswapComponent } from './_crypto/uniswap/uniswap.component';
import { PiComponent } from './_crypto/pi/pi.component';
import { LitecoinComponent } from './_crypto/litecoin/litecoin.component';
import { BnbComponent } from './_crypto/bnb/bnb.component';
import { BundleComponent } from './_crypto/bundle/bundle.component';
import { BchComponent } from './bch/bch.component';
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EkoModalComponent } from './eko-modal/eko-modal.component';
import { PaystackComponent } from './paystack/paystack.component';



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
    EthereumComponent,
    BitcoinComponent,
    UniswapComponent,
    PiComponent,
    LitecoinComponent,
    BnbComponent,
    BundleComponent,
    BchComponent,
    EkoModalComponent,
    PaystackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [CourseService,NgbActiveModal],
  bootstrap: [AppComponent]
})
export class AppModule { }
