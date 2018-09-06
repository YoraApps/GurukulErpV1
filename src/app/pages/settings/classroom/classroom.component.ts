import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { ClassRoomService } from '../../../pages/settings/data/classroom.service';

@Component({
  selector: 'ngx-classroom',
  templateUrl: './classroom.component.html',
  styleUrls: ['./classroom.component.scss']
})
export class ClassroomComponent  {

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
      // ClassRoomId: {
      //   title: 'ID',
      //   type: 'number',
      // },      
      BuildingCode : {
        title: 'Building Code ',
        type: 'string',
      },
      BuildingName : {
        title: 'Building Name ',
        type: 'string',
      },
      RoomCode : {
        title: 'Room Code',
        type: 'string',
      },
      RoomName : {
        title: 'Room Name ',
        type: 'string',
      },
      CapacityofRoom : {
        title: 'Capacity of Room',
        type: 'string',
      },
      Facility : {
        title: 'Facility',
        type: 'string',
      },
      Location:{
        title: 'Location',
        type: 'string',
      }
    },
  };
  source: LocalDataSource = new LocalDataSource();
  constructor(private service: ClassRoomService) {
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
}

