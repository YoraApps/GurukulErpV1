import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { CourseService } from '../../../pages/settings/data/course.service';
import { DegreeTypeService } from '../../../pages/settings/data/degree-type.service';
@Component({
  selector: 'ngx-course',
  templateUrl: './course.component.html',
  styles: ['./course.component.scss'],
})
export class CourseComponent implements OnInit {
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
      CourseCode: {
        title: 'Course Code',
        type: 'string',
      },
      CourseName: {
        title: 'Course Name',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();
  degreeTypeList:any[];

  constructor(private degreeTypeService:DegreeTypeService,private service: CourseService) {
    const data = this.service.getData();
    this.source.load(data);
    this.degreeTypeList=degreeTypeService.getData();
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

