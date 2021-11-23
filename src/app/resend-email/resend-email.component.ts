import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'; // import router from angular router
import { AuthService } from '../_services/auth.service';
import {ServiceLocator} from '../locator.service';
import { AlertService } from '../_services/alert.service';
import { interval } from 'rxjs';
 
const observable1 = interval(1000);
 


@Component({
  selector: 'app-resend-email',
  templateUrl: './resend-email.component.html',
  styleUrls: ['./resend-email.component.css']
})
export class ResendEmailComponent implements OnInit {

  public loader:any;
  public res_data:any;
  resent_status!: boolean;
  public successTickMsg = 'Your details were received, a mail has been sent'
  constructor(private router: Router,private alertService: AlertService) {
    this.loader = ServiceLocator.injector.get(AuthService)
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras.state ;
    this.res_data = state?.data;
    // console.log("damn", this.res_data); 
  }

  

  ngOnInit(): void {
    // 
    // const subscription = observable1.subscribe(x => this.alertService.success('Details received, please check your email for verification instructions ', { keepAfterRouteChange: false }));
   
    // setTimeout(() => {
    //   // Unsubscribes BOTH subscription and childSubscription
    //   subscription.unsubscribe();
    // }, 1000);
    // console.log(20000)
    // this.alertService.success('Testing', { keepAfterRouteChange: false });

  }

  resend_mail(){
    
    
    this.alertService.success('Verification Email was successfully resent, please check your email for verification instructions', { keepAfterRouteChange: false });
    // this.router.navigate(['../login'], { relativeTo: this.router});
                
    this.loader.resendmail(this.res_data.public_id).subscribe(
      (data: any) => {
        if(data.status){
          this.resent_status = true
        }
      },
      (err: { error: { message: string; }; }) => {
        
        
        
      }
    );

  }
  
 
}


// constructor(private route:Router) { 
//   this.loader = ServiceLocator.injector.get(AuthService)
// }

// ngOnInit(): void {

// }
// onSubmit(registrationForm:any):void {
//   console.log(this.form,registrationForm.value);
//   const { firstname,middlename,lastname,username, email,telephone,pass_again, password } = this.form;

  // this.loader.register(firstname,middlename,lastname,username, email,telephone,pass_again, password).subscribe(
  //   (data: any) => {
  //     console.log(data);
  //     this.isSuccessful = true;
  //     this.isSignUpFailed = false;
  //     this.route.navigate(['/Resend/email'], {state: {data: {"public_id":data.data[0],"email":data.data[1]}}});
  //     console.log("History state ",history.state.data)
  //   },
  //   (err: { error: { message: string; }; }) => {
  //     this.errorMessage = err.error.message;
  //     this.isSignUpFailed = true;
      
      
  //   }
  // );
// }