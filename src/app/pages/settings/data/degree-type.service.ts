import { Injectable } from '@angular/core';

@Injectable()
export class DegreeTypeService {

  data = [{
    Id: 1,
    DegreeTypeCode: '1A',
    DegreeTypeName: 'master',
    IsActive: '1',
    CreatedBy: '1',
    CreatedOn: '28/2/2018',
    ModifiedBy: 'bb',
    ModifiedOn: '2/2/2019',
    DegreeCategoryId: 1,

  }, {
    Id: 2,
    DegreeTypeCode: '1A',
    DegreeTypeName: 'master',
    IsActive: '1',
    CreatedBy: '1',
    CreatedOn: '28/2/2018',
    ModifiedBy: 'aa',
    ModifiedOn: '29/2/2018',
    DegreeCategoryId: 1,
  }];

  getData() {
    return this.data;
  }
}

