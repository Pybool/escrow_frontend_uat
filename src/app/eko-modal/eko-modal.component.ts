import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-eko-modal',
  templateUrl: './eko-modal.component.html',
  styleUrls: ['./eko-modal.component.css']
})
export class EkoModalComponent implements OnInit {

  constructor(
    public activeModal: NgbActiveModal
  ) { }
      ngOnInit(): void {
      }
     
      closeModal(message: string) {
        this.activeModal.close();
      }

}

