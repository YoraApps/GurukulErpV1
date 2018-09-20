import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { DriverMasterService } from '../../../pages/transportation/data/driver-master.service';
import { DriverModelComponent } from './driver-model/driver-model.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngx-driver-master',
  templateUrl: './driver-master.component.html',
  styleUrls: ['./driver-master.component.scss'],
})
export class DriverMasterComponent implements OnInit {

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
      DriverName: {
        title: 'Driver Name',
        type: 'string',
      },
      LicenseNo: {
        title: 'License No',
        type: 'string',
      },
      DateOfBirth: {
        title: 'Date Of Birth',
        type: 'date',
      },
      LicenseExpiryDate: {
        title: 'License Expiry Date',
        type: 'date',
      },
      ContactNumber: {
        title: 'Contact Number',
        type: 'number',
      },
      NoOfYearsExperience: {
        title:  'No Of Years Experience',
        type: 'number',
      },
      ReferenceName: {
        title: 	'Reference Name',
        type: 'string',
      },
      ReferenceContactNo: {
        title: 	'Reference ContactNo',
        type: 'number',
      },
      Address: {
        title: 	' Address',
        type: 'string',
      },
    },
  };
  source: LocalDataSource = new LocalDataSource();
  constructor(private service: DriverMasterService,private modalService: NgbModal) {
    const data = this.service.getData();
    this.source.load(data);
  }

  onClick() {
    const activeModal = this.modalService.open(DriverModelComponent, { size: 'lg', container: 'nb-layout' });

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
