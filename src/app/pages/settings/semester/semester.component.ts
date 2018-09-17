import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from "ng2-smart-table";
import { SemesterService } from "../data/semester.service";

@Component({
  selector: 'ngx-semester',
  templateUrl: './semester.component.html',
  styleUrls: ['./semester.component.scss']
})
export class SemesterComponent implements OnInit {

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
      CourseCode: {
        title: 'Semester Code',
        type: 'number',
      },
      CourseName: {
        title: 'Semester Name',
        type: 'string',
      },
       SKS: {
        title: 'SKS',
        type: 'number',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();
  data;
  dataArray: any = [];

  constructor(private service: SemesterService) {

   }

    onDeleteConfirm(event): void {
     debugger
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve(event.data);
      if (event.data.CourseId != null) {
        this.service.removeData(event.data.CourseId);
      }
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
     debugger
    if (window.confirm('Are you sure you want to save?')) {
      event.newData['name'] += ' + added in code';
      event.confirm.resolve(event.newData);
      this.service.saveData(event.newData);
    } else {
      event.confirm.reject();
    }

   }

    onCreateConfirm(event): void {
      event.confirm.resolve(event.newData);
    this.service.saveData(event.newData);
  }

}
