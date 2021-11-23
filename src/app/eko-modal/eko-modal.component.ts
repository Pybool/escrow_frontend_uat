import { reservationroute } from './../routes/app.routes';
import { Component, OnInit,Type } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReservationService} from '../_services/reservation.service';
import { AlertService } from '../_services/alert.service'

@Component({
  selector: 'app-eko-modal',
  templateUrl: './eko-modal.component.html',
  styleUrls: ['./eko-modal.component.css']
})
export class EkoModalComponent implements OnInit {
  form: FormGroup;
  cryptoval?:string;
  loaded = false;
  childloaded = true
  Cryptocurrency:string = "Cryptocurrency"
  btcmyComponent?: Type<any>
  ethmyComponent?: Type<any>
  publicmyComponent?:Type<any>
  unimyComponent?:Type<any>

  bnbmyComponent?: Type<any>
  ltcmyComponent?: Type<any>
  pimyComponent?:Type<any>
  bchmyComponent?:Type<any>
  bndlmyComponent?: Type<any>

  display:boolean = false;
  constructor(
            public activeModal: NgbActiveModal,
            private formBuilder: FormBuilder, 
            private reservationservice: ReservationService,
            private alertService: AlertService
            
          ) { }
      ngOnInit(): void {
        this.agileload()
        this.form = this.formBuilder.group({
          qty: ['', [Validators.required]],
          price: ['', Validators.required],
          crypto:[this.cryptoval]
       });
      }
     
      get f() { return this.form.controls; }
      closeModal(message: string) {
        this.activeModal.close();
      }

      onSubmit() {
        this.alertService.clear()
        this.form.value['crypto']= this.cryptoval
        console.log("Form ",this.form.value)
        this.reservationservice.publish(this.form.value)
        .subscribe({
          next:(payload:any) => {
            if (payload.status){
              console.log("Response ",payload) //ekoemmanueljavlx@gmail.com
              this.alertService.success(payload.message, { keepAfterRouteChange: false })
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

    cryptovalue(crypto:string) {
      
      this.cryptoval = crypto
      this.load(crypto)
  }

  load(crypto) {
   
    this.Cryptocurrency = " "
    this.display = true
    console.log("ModCryptocurrency ",crypto)
    
      switch (crypto) {
        
        case "btc":
          // console.log("blasted ",crypto,cryptoComponent[`${crypto}`])
          import("../_crypto/bitcoin/bitcoin.component")
              .then(mod => mod.BitcoinComponentx)
              .then(BitcoinComponentx => {
                  this.publicmyComponent = BitcoinComponentx.components['lazy'];
                  this.loaded = true;
          });
            break;
        case "eth":
          // console.log("blasted ",crypto,cryptoComponent[`${crypto}`])
          import("../_crypto/ethereum/ethereum.component")
              .then(mod => mod.EthereumComponentx)
              .then(EthereumComponentx => {
                  this.publicmyComponent = EthereumComponentx.components['lazy'];
                  this.loaded = true;
           });
            break;
        
        case "uni":
          // console.log("blasted ",crypto,cryptoComponent[`${crypto}`])
          import("../_crypto/uniswap/uniswap.component")
              .then(mod => mod.UniswapComponentx)
              .then(UniswapComponentx => {
                  this.publicmyComponent = UniswapComponentx.components['lazy'];
                  this.loaded = true;
            });
            break;
        
        case "bnb":
          // console.log("blasted ",crypto,cryptoComponent[`${crypto}`])
          import("../_crypto/bnb/bnb.component")
              .then(mod => mod.BnbComponentx)
              .then(BnbComponentx => {
                  this.publicmyComponent = BnbComponentx.components['lazy'];
                  this.loaded = true;
            });
            break;

        case "ltc":
          // console.log("blasted ",crypto,cryptoComponent[`${crypto}`])
          import("../_crypto/litecoin/litecoin.component")
              .then(mod => mod.LitecoinComponentx)
              .then(LitecoinComponentx => {
                  this.publicmyComponent = LitecoinComponentx.components['lazy'];
                  this.loaded = true;
            });
            break;

        case "pi":
          // console.log("blasted ",crypto,cryptoComponent[`${crypto}`])
          import("../_crypto/pi/pi.component")
              .then(mod => mod.PiComponentx)
              .then(PiComponentx => {
                  this.publicmyComponent = PiComponentx.components['lazy'];
                  this.loaded = true;
            });
            break;
        
        case "bch":
          // console.log("blasted ",crypto,cryptoComponent[`${crypto}`])
          import("../_crypto/bch/bch.component")
              .then(mod => mod.BchComponentx)
              .then(BchComponentx => {
                  this.publicmyComponent = BchComponentx.components['lazy'];
                  this.loaded = true;
            });
            break;

        case "bndl":
          // console.log("blasted ",crypto,cryptoComponent[`${crypto}`])
          import("../_crypto/bundle/bundle.component")
              .then(mod => mod.BundleComponentx)
              .then(BundleComponentx => {
                  this.publicmyComponent = BundleComponentx.components['lazy'];
                  this.loaded = true;
            });
            break;
        
      
    }
  }

  agileload() {
  
    import('../_crypto/bitcoin/bitcoin.component')
        .then(mod => mod.BitcoinComponentx)
        .then(BitcoinComponentx => {
            this.btcmyComponent = BitcoinComponentx.components['lazy'];
            // this.loaded = true;
        });
    import("../_crypto/ethereum/ethereum.component")
          .then(mod => mod.EthereumComponentx)
          .then(EthereumComponentx => {
              this.ethmyComponent = EthereumComponentx.components['lazy'];
              // this.loaded = true;
        });
    
    import("../_crypto/uniswap/uniswap.component")
          .then(mod => mod.UniswapComponentx)
          .then(UniswapComponentx => {
              this.unimyComponent = UniswapComponentx.components['lazy'];
              // this.loaded = true;
        });
    
    import('../_crypto/bnb/bnb.component')
        .then(mod => mod.BnbComponentx)
        .then(BnbComponentx => {
            this.bnbmyComponent = BnbComponentx.components['lazy'];
            // this.loaded = true;
        });
    import("../_crypto/litecoin/litecoin.component")
          .then(mod => mod.LitecoinComponentx)
          .then(LitecoinComponentx => {
              this.ltcmyComponent = LitecoinComponentx.components['lazy'];
              // this.loaded = true;
        });
    
    import("../_crypto/pi/pi.component")
          .then(mod => mod.PiComponentx)
          .then(PiComponentx => {
              this.pimyComponent = PiComponentx.components['lazy'];
              // this.loaded = true;
        });

        import('../_crypto/bundle/bundle.component')
        .then(mod => mod.BundleComponentx)
        .then(BundleComponent => {
            this.bndlmyComponent = BundleComponent.components['lazy'];
            // this.loaded = true;
        });
    import("../_crypto/bch/bch.component")
          .then(mod => mod.BchComponentx)
          .then(BchComponentx => {
              this.bchmyComponent = BchComponentx.components['lazy'];
              // this.loaded = true;
        });
    
   
  }
  



}

