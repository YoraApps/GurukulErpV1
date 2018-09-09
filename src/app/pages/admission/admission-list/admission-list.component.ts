import { Component } from '@angular/core';

import { LocalDataSource } from 'ng2-smart-table';
import { AdmissionListService } from '../data/admission-list.service';

@Component({
  selector: 'ngx-admission-list',
  templateUrl: './admission-list.component.html',
  styleUrls: ['./admission-list.component.scss'],
})
export class AdmissionListComponent  {
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
      AdmissionNumber: {
        title: 'Admission Number',
        type: 'number',
      },
      CandidateName: {
        title: 'Candidate Name ',
        type: 'string',
      },
      CourseName: {
        title: 'Course Name',
        type: 'string',
      },
      BatchName: {
        title: 'Batch Name',
        type: 'string',
      },
      BranchName: {
        title: 'Branch Name',
        type: 'string',
      },
      AdmissionStatusName: {
        title: 'Admission Status Name',
        type: 'string',
      },
    },
  };
//   date1: Date = new Date();
// setting = {
//     bigBanner: true,
//     format: 'dd-MMM-yyyy hh:mm a',
//     defaultOpen: true
// }
  source: LocalDataSource = new LocalDataSource();

  constructor(private service: AdmissionListService) {
    const data = this.service.getData();
    this.source.load(data);
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}

