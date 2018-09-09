import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LocalDataSource, ViewCell } from 'ng2-smart-table';
import { ReviewandApproveService } from '../data/reviewand-approve.service';
import { BatchService } from '../../settings/data/batch.service';
import { CourseService } from '../../settings/data/course.service';


@Component({
  selector: 'button-view',
  template: `
    <button (click)="onClick()">{{ renderValue }}</button>
  `,
})
export class ButtonViewComponent implements ViewCell, OnInit {
  renderValue: string;

  @Input() value: string | number;
  @Input() rowData: any;

  @Output() save: EventEmitter<any> = new EventEmitter();

  ngOnInit() {
    this.renderValue = this.value.toString().toUpperCase();
  }

  onClick() {
    this.save.emit(this.rowData);
  }
}


@Component({
  selector: 'ngx-reviewand-approve',
  templateUrl: './reviewand-approve.component.html',
  styleUrls: ['./reviewand-approve.component.scss'],
})
export class ReviewandApproveComponent implements OnInit {

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
      ApplicationNumber: {
        title: 'Application Number',
        type: 'number',
      },
      ApplicantName: {
        title: 'Applicant Name ',
        type: 'string',
      },
      DocumentStatus: {
        title: 'Document Status',
        type: 'string',
      },
      ApplicationStatus: {
        title: 'Application Status',
        type: 'string',
      },
      button: {
        title: 'Button',
        type: 'custom',
        renderComponent: ButtonViewComponent,
        onComponentInitFunction(instance) {
          instance.save.subscribe(row => {
            alert(`${row.ApplicantName} saved!`);
          });
        },
      },
    },
  };
  source: LocalDataSource = new LocalDataSource();
  batchList: any[];
  courseList: any[];

  constructor(private Reservice: ReviewandApproveService, service: BatchService, _service: CourseService,
    ) {
    const data = this.Reservice.getData();
    this.source.load(data);
    this.batchList = service.getData();
    this.courseList = _service.getData();
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
