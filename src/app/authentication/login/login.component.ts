import { Component, Type, OnInit } from '@angular/core';
import {ServiceLocator} from '../../locator.service';
import { AuthService } from '../../_services/auth.service';
import { AlertService } from '../../_services/alert.service';
import { TokenStorageService } from '../../_services/token-storage.service';
// import { DashboardComponent } from '../../dashboard/dashboard.component';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form?: FormGroup;
  submitted = false;
  loading = false;

  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  public loader:any;
  public token_loader:any;
  static isLoggedIn: any = false;

  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private alertService: AlertService
    ) { 
    this.loader = ServiceLocator.injector.get(AuthService) 
    this.token_loader = ServiceLocator.injector.get(TokenStorageService)
  }
  ngOnInit(): void {

    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
     });

    if (this.token_loader.getToken()) {
      // this.isLoggedIn = true;
      // this.roles = this.token_loader.getUser().roles;
    }
  }
  
  // convenience getter for easy access to form fields
  get f() { return this.form?.controls; }

  onSubmit(loginForm:any): void {
    this.submitted = true;

        // reset alerts on submit
    this.alertService.clear();
    if (this.form?.invalid) {
      console.log("Invalid form")
      return;
    
    }
    this.loading = true;

    this.loader.login(this.f?.email.value, this.f?.password.value)
      // (data: { accessToken: any; }) => {
      .subscribe({
          next:(payload:any) => {
            if (payload.status){
              console.log(payload) //ekoemmanueljavlx@gmail.com
              this.token_loader.saveToken(payload.token);
              this.token_loader.saveUserid(payload.user_id);
              this.token_loader.saveUsername(payload.username);
              this.alertService.success( payload.msg, { keepAfterRouteChange: true })
              this.isLoginFailed = false;
              this.isLoggedIn = true;
              // this.roles = this.token_loader.getUser().roles;
              this.dashboard(payload.username);
            }

            else{
              
            }
          },
          error:(err: { error: { msg: string; }; }) => {
            
            // this.errorMessage = err.error.message;
            console.log("Unauthorized ", err.error.msg)
            this.alertService.error( err.error.msg, { keepAfterRouteChange: false })
            this.isLoginFailed = true;
            this.loading = false;
          }
       });
  }

  dashboard(username:string): void {
    this.router.navigate(['/Dashboard'],{state: {data: {"username":username}}});
    // this.isLoggedIn = false;
  }


}

// export function getHomeComponent(): Type<Component> {
//   if (LoginComponent.isLoggedIn) {
//     return <Type<Component>>DashboardComponent;
//   }
//   else{
//     return <Type<Component>>LoginComponent;
//   }
// }


// Initial Chunk Files   | Names         |      Size
// vendor.js             | vendor        |   3.49 MB
// polyfills.js          | polyfills     | 510.54 kB
// styles.css, styles.js | styles        | 383.32 kB
// main.js               | main          | 321.42 kB
// runtime.js            | runtime       |   6.61 kB
// scripts.js            | scripts       |   1.36 kB

//                       | Initial Total |   4.69 MB