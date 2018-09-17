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
      ExaminationTypeId: {
        title: 'Examination TypeId',
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

    },
  };

  source: LocalDataSource = new LocalDataSource();

  data;
  SetAction: string;
  dataArray: any = {};
  UniversityId: number = 1;

  constructor(private service: ExamTypeService) {

   }

   onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve(event.data);
      if (event.data != null) {
        this.service.removeData(event.data);
      }
    } else {
      event.confirm.reject();
    }
  } 
  // onSaveConfirm(event): void {
  //   if (window.confirm('Are you sure you want to save?')) {
  //     event.newData['name'] += ' + added in code';
  //     event.confirm.resolve(event.newData);
  //     event.newData.SetAction = 'UPDATE';
  //     this.dataArray.push(event.newData);
  //     this.service.saveData(this.dataArray);
  //   } else {
  //     event.confirm.reject();
  //   }
  // }
  onCreateConfirm(event): void {
    event.confirm.resolve(event.newData);
    this.dataArray.push(event.newData);
    debugger
    this.service.saveData(this.dataArray);
  }

  ngOnInit() {
    this.service.getData(this.UniversityId)
          .subscribe( data => {
            this.data = data.results;
            this.source.load(this.data);
          });
      }

}
