import { Component, OnInit } from '@angular/core';
import { BatchService } from '../../settings/data/batch.service';
import { CourseService } from '../../settings/data/course.service';
import { LocalDataSource } from 'ng2-smart-table';
import { AdmissionFeeStatusService } from '../data/admission-fee-status.service';

@Component({
  selector: 'ngx-admission-fee-status',
  templateUrl: './admission-fee-status.component.html',
  styleUrls: ['./admission-fee-status.component.scss'],
})
export class AdmissionFeeStatusComponent implements OnInit {
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
        type: 'number',
      },
      Name: {
        title: 'Name',
        type: 'string',
      },
      ApplicationFormFee: {
        title: 'Application Form Fee',
        type: 'number',
      },
      EntranceExamFee: {
        title: 'Entrance Exam Fee',
        type: 'number',
      },
      TotalFeesToBePaid: {
        title: 'Total Fees to be paid',
        type: 'number',
      },
      TotalFeesPaid	: {
        title: 'Total Fees paid',
        type: 'number',
      },
      PaymentStatus: {
        title: 'Total Fees paid',
        type: 'string',
      },
    },
  };
  source: LocalDataSource = new LocalDataSource();
  batchList: any[];
  courseList: any[];
  constructor(private Admservice: AdmissionFeeStatusService, service: BatchService, _service: CourseService) {
    const data = this.Admservice.getData();
    this.source.load(data);
    this.batchList = service.getData();
    this.courseList = _service.getData();
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
