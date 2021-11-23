import { Component, OnInit } from '@angular/core';
import { ResendEmailComponent } from '../resend-email/resend-email.component'
@Component({
  selector: 'app-sucess-tick',
  templateUrl: './sucess-tick.component.html',
  styleUrls: ['./sucess-tick.component.css']
})
export class SucessTickComponent extends ResendEmailComponent { 
  // constructor() {

  // }

  ngOnInit(): void {
  }

}
