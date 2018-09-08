import { Component, OnInit } from '@angular/core';
import { ChapterService } from '../data/chapter.service';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'ngx-chapter',
  templateUrl: './chapter.component.html',
  styleUrls: ['./chapter.component.scss'],
})
export class ChapterComponent implements OnInit {

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
      ChapterNumber: {
        title: 'Chapter Number',
        type: 'string',
      },
      ChapterTitle: {
        title: 'Chapter Title',
        type: 'string',
      },
      ModeofTeaching: {
        title: 'Mode of Teaching',
        type: 'string',
      },
      ChapterDetails: {
        title: 'Chapter Details',
        type: 'string',
      },
      SKS: {
        title: 'SKS',
        type: 'number',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();


  constructor(private service: ChapterService) {
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
