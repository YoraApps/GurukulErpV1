import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { VehicleService } from '../../../pages/settings/data/vehicle.service';
@Component({
  selector: 'ngx-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.scss'],
})
export class VehicleComponent implements OnInit {

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
      LicenseNumber: {
        title: 'Location Name',
        type: 'string',
      },
      OwnerNumber: {
        title: 'OwnerNumber',
        type: 'number',
      },
      WeightCapacity: {
        title: 'Weight Capacity',
        type: 'number',
      },
      VehicleStatus: {
        title: 'Vehicle Status',
        type: 'boolean',
      },
      RegistrationDate: {
        title: 'Registration Date',
        type: 'date',
      },
      InsuranceDetails: {
        title:  'Insurance Details',
        type: 'string',
      },
      InsuranceExpiryDate: {
        title: 	'Insurance Expiry Date',
        type: 'date',
      },
    },
  };
  source: LocalDataSource = new LocalDataSource();
  constructor(private service: VehicleService) {
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
