import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { BatchService } from '../data/batch.service';
import { BranchService } from '../data/branch.service';
import { BatchModalComponent } from './batch-modal/batch-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngx-batch',
  templateUrl: './batch.component.html',
  styleUrls: ['./batch.component.scss'],
})
export class BatchComponent implements OnInit {

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
      BatchName : {
        title: 'Batch Name ',
        type: 'string',
      },
      ResultType: {
        title: 'Result Type',
        type: 'string',
      },
      AcademicTerm : {
        title: 'Academic Term ',
        type: 'string',
      },
    },
  };


  source: LocalDataSource = new LocalDataSource();
  branchList: any[];

  constructor(branchService: BranchService, private service: BatchService,private modalService: NgbModal) {
    const data = this.service.getData();
    this.source.load(data);
    this.branchList = branchService.getData();
  }  
  onClick() {
    const activeModal = this.modalService.open(BatchModalComponent, { size: 'lg', container: 'nb-layout' });

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
