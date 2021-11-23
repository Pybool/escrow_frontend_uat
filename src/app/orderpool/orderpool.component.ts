import { Component,Type, OnInit,Renderer2 } from '@angular/core';
import { ReservationService} from '../_services/reservation.service';
import { CountdownEvent } from 'ngx-countdown';

@Component({
  selector: 'app-orderpool',
  templateUrl: './orderpool.component.html',
  styleUrls: ['./orderpool.component.css']
})
export class OrderpoolComponent {
  
  orders: any =[]
  // orders
  cryptoval?:string;
  loaded = false;
  childloaded = true
  loading:boolean = false;
  public timestamp:any =  Math.floor(Date.now()/1000)
  
  constructor( private reservationservice: ReservationService,
               private renderer: Renderer2) {  
                console.log("timestamp ",this.timestamp)
  }

  onTimerFinished(e: CountdownEvent,idx) {

    if (e.action == 'done') {
      console.log("I am done ",idx)
      const parent: HTMLElement = document.getElementById(idx);
      console.log(document.getElementById(idx))
      // const child = parent.children[0];
      this.renderer.setProperty(parent, 'disabled', 'true');
    }
  }

  // public bitcoin:any;
  ngAfterViewInit() {
    // your code ...
    console.log("mad 000000")
    this.loading = true
    this.reservationservice.loadReservationPool(20)//this.reservationservice.loadReservationPool(sortby,20) The standard to be used
          .subscribe({
            next:(payload:any) => {
              if (payload.status){
                
                console.log("Response ",payload) //ekoemmanueljavlx@gmail.com
                this.orders = payload.data
                this.loading = false
                
              }

              else{
                
              }
            },
            error:(err: { error: { msg: string; }; }) => {
              
              // this.errorMessage = err.error.message;
              console.log("Unauthorized ", err.error.msg)
              // this.alertService.error( err.error.msg, { keepAfterRouteChange: false })
              // this.isLoginFailed = true;
              // this.loading = false;
            }
        });
  }

   public bitcoin:any = import("../_crypto/bitcoin/bitcoin.component")
          .then(mod => mod.BitcoinComponentx)
          .then(BitcoinComponentx => {
              this.bitcoin = BitcoinComponentx.components['lazy'];
              this.loaded = true;
          });
   public ethereum:any = import("../_crypto/ethereum/ethereum.component")
          .then(mod => mod.EthereumComponentx)
          .then(EthereumComponentx => {
              this.ethereum = EthereumComponentx.components['lazy'];
              // this.loaded = true;
          });

   public uniswap:any = import("../_crypto/uniswap/uniswap.component")
        .then(mod => mod.UniswapComponentx)
        .then(UniswapComponentx => {
            this.uniswap = UniswapComponentx.components['lazy'];
            // this.loaded = true;
      });

   public bnb:any =  import('../_crypto/bnb/bnb.component')
        .then(mod => mod.BnbComponentx)
        .then(BnbComponentx => {
            this.bnb = BnbComponentx.components['lazy'];
            // this.loaded = true;
        });

   public litecoin:any = import("../_crypto/litecoin/litecoin.component")
        .then(mod => mod.LitecoinComponentx)
        .then(LitecoinComponentx => {
            this.litecoin = LitecoinComponentx.components['lazy'];
            // this.loaded = true;
      });

    public pi:any= import("../_crypto/pi/pi.component")
        .then(mod => mod.PiComponentx)
        .then(PiComponentx => {
            this.pi = PiComponentx.components['lazy'];
            // this.loaded = true;
      });

    public bundle:any= import('../_crypto/bundle/bundle.component')
        .then(mod => mod.BundleComponentx)
        .then(BundleComponent => {
            this.bundle = BundleComponent.components['lazy'];
            // this.loaded = true;
        });

    public bcash:any= import("../_crypto/bch/bch.component")
        .then(mod => mod.BchComponentx)
        .then(BchComponentx => {
            this.bcash = BchComponentx.components['lazy'];
            // this.loaded = true;
      });
          

}



class Order{

    id!:number
    order_id!: string;
    crypto!: any;
    quantity!: number;
    price!: string;
    timestamp!: number;
  

}