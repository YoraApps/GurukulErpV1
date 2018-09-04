import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { BranchService } from '../data/branch.service';
@Component({
  selector: 'ngx-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.scss'],
})
export class BranchComponent implements OnInit {
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
        title: 'Id',
        type: 'number',
      },
      CourseName: {
        title: 'Course Name',
        type: 'string',
      },
      BranchCode: {
        title: 'Branch Code',
        type: 'string',
      },
      BranchName: {
        title: 'Branch Name',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();
  constructor(private service:BranchService) {
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
  ngOnInit() {
  }

}
