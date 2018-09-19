import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { ProgramSemAssociationService } from '../data/program-sem-association.service';

@Component({
  selector: 'ngx-program-sem-association',
  templateUrl: './program-sem-association.component.html',
  styleUrls: ['./program-sem-association.component.scss'],
})
export class ProgramSemAssociationComponent implements OnInit {

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
      DocumentNumber: {
        title: 'Document Number',
        type: 'number',
      },
      Description: {
        title: 'Description',
        type: 'string',
      },
      PostedDate: {
        title: 'Posted Date',
        type: 'date',
      },
      Month: {
        title:  'Month',
        type: 'string',
      },
      Year: {
        title: 	'Year',
        type: 'date',
      },
       Amount: {
        title: 	'Amount',
        type: 'number',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();


  constructor(private service: ProgramSemAssociationService) {
    const data = this.service.getData1();
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
