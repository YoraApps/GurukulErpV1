import { Component, OnInit } from '@angular/core';
import { BatchService } from "../../settings/data/batch.service";
import { ProgramStudyService } from "../../settings/data/program-study.service";
import { SemesterService } from "../../settings/data/semester.service";
import { LocalDataSource } from "ng2-smart-table";
import { TeacherNotesService } from "../data/teacher-notes.service";

@Component({
  selector: 'ngx-teacher-notes',
  templateUrl: './teacher-notes.component.html',
  styleUrls: ['./teacher-notes.component.scss']
})
export class TeacherNotesComponent implements OnInit {

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
      Semester: {
        title: 'Semester',
        type: 'string',
      },
       TeacherName: {
        title: 'Teacher Name',
        type: 'string',
      },
      CourseName: {
        title: 'Course Name',
        type: 'string',
      },
       CreatedOn: {
        title: 'Created On',
        type: 'string',
      },
       UpdatedOn: {
        title: 'Updated On',
        type: 'string',
      },
      TeacherNotes: {
        title: 'Teacher Notes',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();
data;
  batchList: any[];
  ProgramStudyList: any[];
  semisterList: any[];

  constructor(service: BatchService,private tservice:TeacherNotesService, 
  private _service: SemesterService,private services:ProgramStudyService) { 

    this.batchList = service.getData();
    const data = this.tservice.getData();
    this.source.load(data);
  }

  ngOnInit() {
    this.services.getData()
          .subscribe( data => {
            this.data = data.results;
            console.log(this.data);
            this.ProgramStudyList = this.data;
            console.log(this.ProgramStudyList);
          });

          this._service.getData()
          .subscribe( data => {
            this.data = data.results;
            console.log(this.data);
            this.semisterList = this.data;
            console.log(this.semisterList);
          });
  }

}
