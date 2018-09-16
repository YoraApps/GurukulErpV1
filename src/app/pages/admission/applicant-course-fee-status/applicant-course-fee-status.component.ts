import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { BatchService } from '../../settings/data/batch.service';
import { CourseService } from '../../settings/data/course.service';
import { ApplicantCourseFeeService } from '../data/applicant-course-fee.service';

@Component({
  selector: 'ngx-applicant-course-fee-status',
  templateUrl: './applicant-course-fee-status.component.html',
  styleUrls: ['./applicant-course-fee-status.component.scss'],
})
export class ApplicantCourseFeeStatusComponent implements OnInit {

 settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      ApplicationNumber: {
        title: 'Application Number',
        type: 'string',
      },
      Name: {
        title: 'Name',
        type: 'string',
      },
      TotalFeestobepaid: {
        title: 'Total Fees to be paid',
        type: 'string',
      },
      TotalFeespaid: {
        title: 'Total Fees paid',
        type: 'string',
      },
      PaymentStatus: {
        title: 'Payment Status',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  batchList: any[];
  courseList: any[];
  constructor(service: BatchService, _service: CourseService, private services: ApplicantCourseFeeService) {
    this.batchList = service.getData();
    this.courseList = _service.getData();
    const data = this.services.getData();
    this.source.load(data);
   }

   onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  ngOnInit() {
  }

}
