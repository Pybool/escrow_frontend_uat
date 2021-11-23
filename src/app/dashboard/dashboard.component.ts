import { Component, OnInit } from '@angular/core';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { AlertService } from '../_services/alert.service';
import { EkoModalComponent } from '../eko-modal/eko-modal.component';
const USERNAME = "USERNAME";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  closeModal: any;
  public username!:string;
  
  // console.log("History state ",history.state.data)
  constructor(public modalService: NgbModal) { }
  ngOnInit(): void {
    const username_obj = window.sessionStorage.getItem(USERNAME);
    if (username_obj) {
      console.log("Username ",username_obj)
      this.username = JSON.parse(username_obj) || history.state.data.username
    }
    
  }
  openModal() {
    const modalRef = this.modalService.open(EkoModalComponent,
      {
        scrollable: true,
        windowClass: 'myCustomModalClass',
      });
    modalRef.result.then((result:any) => {
      console.log("Modal result ",result);
    }, (reason:any) => {
    });
  }

}

