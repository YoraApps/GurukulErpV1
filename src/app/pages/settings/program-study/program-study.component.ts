import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { ProgramStudyService } from "../data/program-study.service";

@Component({
  selector: 'ngx-program-study',
  templateUrl: './program-study.component.html',
  styleUrls: ['./program-study.component.scss']
})
export class ProgramStudyComponent implements OnInit {

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
      ProgramStudyCode: {
        title: 'Program Study Code',
        type: 'number',
      },
      ProgramStudyName: {
        title: 'Program Study Name',
        type: 'string',
      },
      AcademicTerm: {
        title: 'Academic Term',
        type: 'string',
      },
       SKS: {
        title: 'SKS',
        type: 'number',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();


  constructor(private service: ProgramStudyService) {
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
