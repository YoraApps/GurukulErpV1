import { Injectable } from '@angular/core';

@Injectable()
export class DegreeTypeService {

  data = [{
    Id: 1,
    DegreeCategoryName: 'ug',
    DegreeTypeCode: '1A',
    DegreeTypeName: 'master',
    IsActive: '1',
    CreatedBy: '1',
    CreatedOn: '28/2/2018',
    ModifiedBy: 'bb',
    ModifiedOn: '2/2/2019',

  }, {
    Id: 2,
    DegreeCategoryName: 'pg',
    DegreeTypeCode: '1A',
    DegreeTypeName: 'master',
    IsActive: '1',
    CreatedBy: '1',
    CreatedOn: '28/2/2018',
    ModifiedBy: 'aa',
    ModifiedOn: '29/2/2018',
  }];

  getData() {
    return this.data;
  }
}

