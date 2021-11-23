import { Component, Input, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-ethereum',
  templateUrl: './ethereum.component.html',
  styleUrls: ['./ethereum.component.css']
})
export class EthereumComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }

}

@NgModule({
  declarations: [EthereumComponent],
  exports: [EthereumComponent],
  imports: [BrowserModule,]
})
export class EthereumComponentx { 

  static components = {
    lazy: EthereumComponent,
  };

}