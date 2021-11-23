import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


@Component({
  selector: 'app-litecoin',
  templateUrl: './litecoin.component.html',
  styleUrls: ['./litecoin.component.css']
})
export class LitecoinComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

@NgModule({
  declarations: [LitecoinComponent],
  exports: [LitecoinComponent],
  imports: [BrowserModule,]
})
export class LitecoinComponentx { 

  static components = {
    lazy: LitecoinComponent,
  };

}