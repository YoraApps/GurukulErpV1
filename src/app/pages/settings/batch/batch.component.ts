import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { BatchService } from '../data/batch.service';
import { BranchService } from '../data/branch.service';

@Component({
  selector: 'ngx-batch',
  templateUrl: './batch.component.html',
  styleUrls: ['./batch.component.scss'],
})
export class BatchComponent implements OnInit {

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
      id: {
        title: 'ID',
        type: 'number',
      },
      BranchId: {
        title: 'Branch Id',
        type: 'string',
      },
      BatchCode: {
        title: 'Batch Code',
        type: 'string',
      },
      BatchName: {
        title: 'Batch Name',
        type: 'string',
      },
    },
  };


  source: LocalDataSource = new LocalDataSource();
  branchList: any[];

  constructor(branchService: BranchService, private service: BatchService) {
    const data = this.service.getData();
    this.source.load(data);
    this.branchList = branchService.getData();
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
