import { Injector,Component, OnInit } from '@angular/core';
import { AuthService } from '../../_services/auth.service';
import {ServiceLocator} from '../../locator.service';
import { BankInfo } from '../../banks.info';
import {Router,ActivatedRoute} from '@angular/router'; // import router from angular router
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertService } from '../../_services/alert.service';
import { MustMatch } from '../../_helpers/must-match.validator';
import { AlertComponent } from '../../_alert/alert.component';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})



export class RegisterComponent implements OnInit {
    form?: FormGroup;
    submitted = false;
    loading = false;
  //   form:any = {
  //   firstname:"",
  //   middlename:"",
  //   lastname:"",
  //   username:"",
  //   email:"",
  //   telephone:"",
  //   pass_again:"",
  //   password:""

  //  };
  
  // items: item[] = [{bankname: 'One', val: 1}, {name: 'Two', val: 2}, {name: 'Three', val: 3}, {name: 'Four', val: 3}, {name: 'Five', val: 3}];
  items: item[] = BankInfo.data;
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  public loader:any;
  constructor(private router:Router,
              private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private accountService: AuthService,
              private alertService: AlertService
              ) 
              { 
              this.loader = ServiceLocator.injector.get(AuthService)
             }
  
  ngOnInit(): void {
    
    this.form = this.formBuilder.group({
               
                  firstname: ['', Validators.required],
                  middlename: ['', Validators.required],
                  lastname: ['', Validators.required],
                  username: ['', Validators.required],
                  email: ['', [Validators.required, Validators.email]],
                  telephone: ['', Validators.required],
                  password: ['', [Validators.required, Validators.minLength(6)]],
                  pass_again: ['', Validators.required]
                  // acceptTerms: [false, Validators.requiredTrue]
              }, {
                  validator: MustMatch('password', 'pass_again')
              });
}

  // convenience getter for easy access to form fields
  get f() { return this.form?.controls; }

  onSubmit(registrationForm:any):void {
    this.submitted = true;
    // console.log("Invalid form")
    // reset alerts on submit
    this.alertService.clear();
    // stop here if form is invalid
    if (this.form?.invalid) {
      console.log("Invalid form")
      return;
    
    }
    this.loading = true;

    console.log(registrationForm.value);
    // const { firstname,middlename,lastname,username, email,telephone,pass_again, password } = this.form;

    this.loader.register(registrationForm.value)
        // .pipe(first())
        .subscribe({
          next:(data: any) => {
            console.log(data);
            this.isSuccessful = true;
            this.isSignUpFailed = false;
            // this.alertService.clear();
            
            if (data.status){
              this.alertService.success(data.message, { keepAfterRouteChange: true })
              this.router.navigate(['/Resend/email'], {state: {data: {"public_id":data.data[0],"email":data.data[1]}}});
             
            }
            else{
              
              this.alertService.error(data.message, { keepAfterRouteChange: false })
              console.log("New error" ,data.message)
            }
            console.log("History state ",history.state.data)
            // this.alertService.clear();
          },
          error:(err: { error: { message: string; }; }) => {
            this.errorMessage = err.error.message;
            this.alertService.success(this.errorMessage);
            console.log("New error, this.errorMessage")
            this.isSignUpFailed = true;
            
            
          }
        });
  }

}

class item {
  name!: string;
  code!: string;
  id!:number
}
