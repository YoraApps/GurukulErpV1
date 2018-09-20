import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngx-assign-route-model',
  templateUrl: './assign-route-model.component.html',
  styleUrls: ['./assign-route-model.component.scss']
})
export class AssignRouteModelComponent implements OnInit {

  constructor(private activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

  closeModal() {
    this.activeModal.close();
  }

}
