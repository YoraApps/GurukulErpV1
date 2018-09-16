import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { FacultyDepartmentService } from '../data/faculty-department.service';

@Component({
  selector: 'ngx-faculty-department',
  templateUrl: './faculty-department.component.html',
  styleUrls: ['./faculty-department.component.scss'],
})
export class FacultyDepartmentComponent implements OnInit {

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
      FacultyDepartmentCode: {
        title: 'Faculty Department Code',
        type: 'number',
      },
      FacultyDepartmentName: {
        title: 'Faculty Department Name',
        type: 'string',
      },
      FacultyDepartmentDescription: {
        title: 'Faculty Department Description',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();


  constructor(private service: FacultyDepartmentService) {
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
