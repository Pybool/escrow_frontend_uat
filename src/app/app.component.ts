import { Component } from '@angular/core';
import { AuthService } from './_services/auth.service';
import { Account} from './_models';
import {Router} from '@angular/router'; // import router from angular router

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = "Binary Cryptocurrency Escrow";

  getTitle(){

    return this.title
  }
  account: Account;
  constructor(private authService: AuthService,private router: Router) {
    this.authService.account.subscribe(x => this.account = x);
}

  logout() {
    this.authService.logout();
}

  reload(path:string){
    this.router.navigate([path])
      .then(() => {
        window.location.reload();
      });
  }
}




