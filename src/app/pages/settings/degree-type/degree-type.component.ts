import { Component  } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { DegreeTypeService } from '../../../pages/settings/data/degree-type.service';
import { DegreeCategoryService } from '../data/degree-category.service';

@Component({
  selector: 'ngx-degree-type',
  templateUrl: './degree-type.component.html',
  styleUrls: ['./degree-type.component.scss'],
})
export class DegreeTypeComponent {

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
      Id: {
        title: 'ID',
        type: 'number',
      },
      DegreeTypeCode: {
        title: 'DegreeType Code',
        type: 'string',
      },
      DegreeTypeName: {
        title: 'DegreeType Name',
        type: 'string',
      },  
    },
  };
  source: LocalDataSource = new LocalDataSource();
  DegreeCategoryList : any [];

  constructor(private service: DegreeTypeService ,_Dservice:DegreeCategoryService) {
    const data = this.service.getData();
    this.source.load(data);
    this.DegreeCategoryList = _Dservice.getData();
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
