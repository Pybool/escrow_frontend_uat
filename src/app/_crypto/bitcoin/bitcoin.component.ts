import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
@Component({
  selector: 'app-bitcoin',
  templateUrl: './bitcoin.component.html',
  styleUrls: ['./bitcoin.component.css']
})
export class BitcoinComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

@NgModule({
  declarations: [BitcoinComponent],
  exports: [BitcoinComponent],
  imports: [BrowserModule,]
})
export class BitcoinComponentx { 

  static components = {
    lazy: BitcoinComponent,
  };

}

