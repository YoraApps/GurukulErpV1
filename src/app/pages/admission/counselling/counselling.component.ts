import { Component } from '@angular/core';

import { LocalDataSource } from 'ng2-smart-table';
import { CounsellingService } from '../data/counselling.service';

@Component({
  selector: 'ngx-counselling',
  templateUrl: './counselling.component.html',
  styleUrls: ['./counselling.component.scss'],
})
export class CounsellingComponent {
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
      CandidateName: {
        title: 'Candidate Name ',
        type: 'string',
      },
      EmailId: {
        title: 'Email Id',
        type: 'string',
      },
      Address: {
        title: 'Address',
        type: 'string',
      },
      DegreeCategory: {
        title: 'Degree Category',
        type: 'string',
      },
      DegreeType: {
        title: 'Degree Type',
        type: 'string',
      },
      Batch: {
        title: 'Batch',
        type: 'string',
      },
      Course: {
        title: 'Course',
        type: 'string',
      },
      AdmissionVerificationStatus: {
        title: 'Admission Verification Status',
        type: 'string',
      },
    },
  };
  source: LocalDataSource = new LocalDataSource();

  constructor(private service: CounsellingService) {
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
