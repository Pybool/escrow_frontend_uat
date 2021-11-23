import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-bch',
  templateUrl: './bch.component.html',
  styleUrls: ['./bch.component.css']
})
export class BchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

@NgModule({
  declarations: [BchComponent],
  exports: [BchComponent],
  imports: [BrowserModule,]
})
export class BchComponentx { 

  static components = {
    lazy: BchComponent,
  };

}
