import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { StudentCharacterSupervisionService } from '../data/student-character-supervision.service';
import { MeritAndDemeritsService } from '../data/merit-and-demerits.service';

@Component({
  selector: 'ngx-conduct',
  templateUrl: './conduct.component.html',
  styleUrls: ['./conduct.component.scss'],
})
export class ConductComponent implements OnInit {

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
      ReportName: {
        title: 'Report Name',
        type: 'string',
      },
      StudentName: {
        title: 'Student Name',
        type: 'string',
      },
      CounsellorName: {
        title: 'Counsellor Name',
        type: 'string',
      },
      Excellent: {
        title: 'Excellent',
        type: 'string',
      },
      Standard: {
        title: 'Standard',
        type: 'string',
      },
      Disturbance: {
        title:  'Disturbance',
        type: 'string',
      },
      Remark: {
        title: 	'Remark',
        type: 'string',
      },
    },
  };
 conductsettings = {
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
      DateAndDay: {
        title: 'Date And Day',
        type: 'date',
      },
      GoodConduct: {
        title: 'Good Conduct',
        type: 'string',
      },
      MisConduct: {
        title: 'Mis Conduct',
        type: 'string',
      },
      ActionTeacher: {
        title: 'Action Teacher',
        type: 'string',
      },
      Venue: {
        title: 'Venue',
        type: 'string',
      },
      ClassMonitorWitness: {
        title:  'ClassMonitor Witness',
        type: 'string',
      },
    },
  };
  source: LocalDataSource = new LocalDataSource();
  _source: LocalDataSource = new LocalDataSource();
  constructor(private service: StudentCharacterSupervisionService, private  _service: MeritAndDemeritsService) {
    const data = this.service.getData();
    const data1 = this._service.getData1();
    this.source.load(data);
    this._source.load(data1);
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
