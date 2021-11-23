import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-bundle',
  templateUrl: './bundle.component.html',
  styleUrls: ['./bundle.component.css']
})
export class BundleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

@NgModule({
  declarations: [BundleComponent],
  exports: [BundleComponent],
  imports: [BrowserModule,]
})
export class BundleComponentx { 

  static components = {
    lazy: BundleComponent,
  };

}