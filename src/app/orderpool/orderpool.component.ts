import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orderpool',
  templateUrl: './orderpool.component.html',
  styleUrls: ['./orderpool.component.css']
})
export class OrderpoolComponent {
  
  orders: Order[] =[
 
    {order_id:'OF-8463524245233',crypto:'<app-ethereum></app-ethereum>',qty: 4,price:'$1000/unit',expire:'3min:56s'},
    {order_id:'OF-8463524245234',crypto:'<app-bitcoin></app-bitcoin>',qty: 1,price:'$5000/unit',expire:'3min:56s'},
    {order_id:'OF-8463524245235',crypto:'<app-uniswap></app-uniswap>',qty: 7,price:'$103.89/unit',expire:'3min:56s'},
    {order_id:'OF-8463524245236',crypto:'<app-pi></app-pi>',qty: 13,price:'$314.2/unit',expire:'3min:56s'},
    {order_id:'OF-8463524245237',crypto:'<app-litecoin></app-litecoin>',qty: 11,price:'$27.2/unit',expire:'3min:56s'},
    {order_id:'OF-8463524245238',crypto:'<app-bnb></app-bnb>',qty: 6,price:'$200.2/unit',expire:'3min:56s'},
    {order_id:'OF-8463524245239',crypto:'<app-bundle></app-bundle>',qty: 4,price:'$97.2/unit',expire:'3min:56s'},
    {order_id:'OF-8463524245240',crypto:'<app-bch></app-bch>',qty: 11,price:'$50.2/unit',expire:'3min:56s'},
    {order_id:'OF-8463524245241',crypto:'<app-ethereum></app-ethereum>',qty: 11,price:'$990/unit',expire:'3min:56s'},
    {order_id:'OF-8463524245242',crypto:'<app-litecoin></app-litecoin>',qty: 6,price:'$26.8/unit',expire:'3min:56s'},
    {order_id:'OF-8463524245243',crypto:'<app-uniswap></app-uniswap>',qty: 6,price:'$102.8/unit',expire:'3min:56s'},
  
  ]

}


class Order{

    order_id!: string;
    crypto!: any;
    qty!: number;
    price!: string;
    expire!: string;
  

}