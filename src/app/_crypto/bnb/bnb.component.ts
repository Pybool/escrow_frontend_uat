import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-bnb',
  templateUrl: './bnb.component.html',
  styleUrls: ['./bnb.component.css']
})
export class BnbComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

@NgModule({
  declarations: [BnbComponent],
  exports: [BnbComponent],
  imports: [BrowserModule,]
})
export class BnbComponentx { 

  static components = {
    lazy: BnbComponent,
  };

}