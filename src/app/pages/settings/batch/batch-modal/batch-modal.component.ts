import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'ngx-batch-modal',
  templateUrl: './batch-modal.component.html',
  styleUrls: ['./batch-modal.component.scss']
})
export class BatchModalComponent implements OnInit {

  constructor(private activeModal: NgbActiveModal)  { }

  ngOnInit() {
  }

  closeModal() {
    this.activeModal.close();
  }

}
