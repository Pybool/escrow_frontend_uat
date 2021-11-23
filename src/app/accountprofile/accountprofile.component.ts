import { BankVerification } from './../_models/bank.verification';
import { Component, OnInit } from '@angular/core';
import {ServiceLocator} from '../locator.service';
import { BankInfo } from '../banks.info';
import {Router,ActivatedRoute} from '@angular/router'; // import router from angular router
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../_services/auth.service';
import { AlertService } from '../_services/alert.service';
const clonedeep = require('lodash/clonedeep')

@Component({
  selector: 'app-accountprofile',
  templateUrl: './accountprofile.component.html',
  styleUrls: ['./accountprofile.component.css']
})
export class AccountprofileComponent implements OnInit {
  form?: FormGroup;
  submitted = false;
  loading = false;
  errorMessage = '';
  private verification_status:boolean = false;
  banks: bank[] = BankInfo.data;
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
 
      bankname: [''],
      accountname: [''],
      bankcode: [''],
      accountno: [''],
      search: [''],
    
      });
  }
  onSubmit(accountProfileForm:any):void {
    this.submitted = true;
    // reset alerts on submit
    this.alertService.clear();
    // stop here if form is invalid
    if (this.form?.invalid) {
      console.log("Invalid form")
      return;
    
    }
    this.loading = true;


    function getCode(str) {
      return str.split('@')[1];
  }
  function getName(str) {
    console.log("debug ",str)
    return str.split('@')[0];
}
    // console.log(getCode(accountProfileForm.value.bankname));
   
    let copy_accountProfileForm = JSON.parse(JSON.stringify(clonedeep(accountProfileForm.value)))
    copy_accountProfileForm['bankcode'] = getCode(copy_accountProfileForm.bankname)
    copy_accountProfileForm['bankname'] = getName(copy_accountProfileForm.bankname)
    // console.log(copy_accountProfileForm)
    // const { firstname,middlename,lastname,username, email,bankname,bvn,phone,pass_again,acc_no, password } = this.form;resolveAccNo

    this.loader.resolveAccNo(copy_accountProfileForm)
        // .pipe(first())
        
        .subscribe({
          next:(data: any) => {
            console.log("Bin ",data);
            
            if (data.status){
              this.verification_status = true;
              this.loading = false;
              this.alertService.success(data.message, { keepAfterRouteChange: false })
              
              // this.router.navigate(['/Resend/email'], {state: {data: {"public_id":data.data[0],"email":data.data[1]}}});
             
            }
            else{
              this.loading = false;
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
            this.alertService.clear();
            // this.isSignUpFailed = true;
            
            
          }
        });
    
  }

}

class bank {
  name!: string;
  code!: string;
  id!:number
}
