import { Component, OnInit } from '@angular/core';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { EkoModalComponent } from '../eko-modal/eko-modal.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  closeModal: any;
  constructor(public modalService: NgbModal) { }
  openModal() {
    const modalRef = this.modalService.open(EkoModalComponent,
      {
        scrollable: true,
        windowClass: 'myCustomModalClass',
      });
    modalRef.result.then((result:any) => {
      console.log(result);
    }, (reason:any) => {
    });
  }

}
