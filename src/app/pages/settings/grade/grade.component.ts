import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from "ng2-smart-table";
import { GradeService } from "../data/grade.service";

@Component({
  selector: 'ngx-grade',
  templateUrl: './grade.component.html',
  styleUrls: ['./grade.component.scss']
})
export class GradeComponent implements OnInit {

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
      GradeCode: {
        title: 'Grade Code',
        type: 'number',
      },
      GradeName: {
        title: 'Grade Name',
        type: 'string',
      },
      GradeValue: {
        title: 'Grade Value',
        type: 'string',
      },
       Percentage: {
        title: 'Grade Value',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();


  constructor(private service: GradeService) {
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
