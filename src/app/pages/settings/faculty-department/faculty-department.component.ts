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
      confirmCreate: true,
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmSave: true,
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      FacultyDeptCode: {
        title: 'Faculty Department Code',
        type: 'number',
      },
      FacultyDeptName: {
        title: 'Faculty Department Name',
        type: 'string',
      },
      FacultyDeptDescription: {
        title: 'Faculty Department Description',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

    data;
    SetAction: string;
  dataArray: any = [];

  constructor(private service: FacultyDepartmentService) {
    
   }

   onDeleteConfirm(event): void {
     debugger
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve(event.data);
      event.data.SetAction = 'REMOVE';
        this.service.removeData(event.data);
      
    } else {
      event.confirm.reject();
    }
  }


  ngOnInit() {
    this.service.getData()
          .subscribe( data => {
            this.data = data.results;
            this.source.load(this.data);
          });
  }

  onSaveConfirm(event): void {
    if (window.confirm('Are you sure you want to save?')) {
      event.newData['name'] += ' + added in code';
      event.confirm.resolve(event.newData);
      event.newData.SetAction = 'UPDATE';
      this.service.saveData(event.newData);
    } else {
      event.confirm.reject();
    }
  }

  onCreateConfirm(event): void {
    event.confirm.resolve(event.newData);
    event.newData.SetAction = 'INSERT';
    this.service.saveData(event.newData);
  }


}
