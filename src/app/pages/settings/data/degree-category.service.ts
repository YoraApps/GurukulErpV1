import { Injectable } from '@angular/core';

@Injectable()
export class DegreeCategoryService {

  data = [{
    id: 1,
    DegreeCategoryCode: '021356',
    DegreeCategoryName: 'EEE',
    IsActive: '1',
    CreatedBy: '53',
    CreatedOn: '03/09/2018',
    ModifiedBy: '36',
    ModifiedOn: '02/09/2018',
  }, {
    id: 2,
    DegreeCategoryCode: '045691',
    DegreeCategoryName: 'ECE',
    IsActive: '1',
    CreatedBy: '43',
    CreatedOn: '03/09/2018',
    ModifiedBy: '36',
    ModifiedOn: '02/09/2018',
  }];

  getData() {
    return this.data;
  }
}
