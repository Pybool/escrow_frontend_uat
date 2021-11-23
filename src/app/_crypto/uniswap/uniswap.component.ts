import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-uniswap',
  templateUrl: './uniswap.component.html',
  styleUrls: ['./uniswap.component.css']
})
export class UniswapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

@NgModule({
  declarations: [UniswapComponent],
  exports: [UniswapComponent],
  imports: [BrowserModule,]
})
export class UniswapComponentx { 

  static components = {
    lazy: UniswapComponent,
  };

}