import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { CourseService } from '../../../pages/settings/data/course.service';
import { DegreeTypeService } from '../../../pages/settings/data/degree-type.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CourseModalComponent } from './course-modal/course-modal.component';
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
      CourseCode: {
        title: 'Course Code',
        type: 'string',
      },
      CourseName: {
        title: 'Course Name',
        type: 'string',
      },
       TotalSKS: {
        title: 'Total SKS',
        type: 'string',
      },
      CourseType: {
        title: 'Course Type',
        type: 'string',
      },
       CourseGroup: {
        title: 'Course Group',
        type: 'string',
      },
      PrerequisiteCourse: {
        title: 'Pre requisite Course',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();
  degreeTypeList: any[];

  constructor(degreeTypeService: DegreeTypeService, private service: CourseService,private modalService: NgbModal) {
    const data = this.service.getData();
    this.source.load(data);
    this.degreeTypeList = degreeTypeService.getData();
  }
  onClick() {
    const activeModal = this.modalService.open(CourseModalComponent, { size: 'lg', container: 'nb-layout' });

    activeModal.componentInstance.modalHeader = 'Large Modal';
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

