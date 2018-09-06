import { Component, OnInit } from '@angular/core';
import { ExamTypeService } from '../data/exam-type.service';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'ngx-exam-type',
  templateUrl: './exam-type.component.html',
  styleUrls: ['./exam-type.component.scss'],
})
export class ExamTypeComponent implements OnInit {

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
      ExamGroup: {
        title: 'Exam Group',
        type: 'string',
      },
      ExamName: {
        title: 'Exam Name',
        type: 'string',
      },
      Remarks: {
        title: 'Remarks',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();


  constructor(private service: ExamTypeService) {
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
