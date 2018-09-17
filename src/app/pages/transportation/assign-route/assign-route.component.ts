import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from "ng2-smart-table";
import { AssignRouteService } from "../data/assign-route.service";

@Component({
  selector: 'ngx-assign-route',
  templateUrl: './assign-route.component.html',
  styleUrls: ['./assign-route.component.scss']
})
export class AssignRouteComponent implements OnInit {

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
      StudentName: {
        title: 'Student Name',
        type: 'string',
      },
      SelectedRoute: {
        title: 'Selected Route',
        type: 'string',
      },
      DropPickUpPoint: {
        title: 'Drop Pick Up Point',
        type: 'date',
      },
      FromMonth: {
        title: 'From Month',
        type: 'date',
      },
      ToMonth: {
        title: 'To Month',
        type: 'number',
      },
    },
  };
  source: LocalDataSource = new LocalDataSource();
  constructor(private service: AssignRouteService) {
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
