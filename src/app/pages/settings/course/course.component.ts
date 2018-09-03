import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { CourseService } from '../../../pages/settings/data/course.service';
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
      DegreeTypeId: {
        title: 'Degree Name',
        type: 'string',
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

  constructor(private service: CourseService) {
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
