import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
//import { DatepickerOptions } from 'ng2-datepicker';

import * as enLocale from 'date-fns/locale/en';
import { DatepickerOptions } from '../../../datepicker/ng-datepicker.component';



@Component({
  selector: 'ngx-assign-route-model',
  templateUrl: './assign-route-model.component.html',
  styleUrls: ['./assign-route-model.component.scss']
})
export class AssignRouteModelComponent implements OnInit {

  constructor(private activeModal: NgbActiveModal) {
    this.date = new Date();
   }

  ngOnInit() {
  }

  closeModal() {
    this.activeModal.close();
  }

  date: Date;
  options: DatepickerOptions = {
    locale: enLocale
  };


}
