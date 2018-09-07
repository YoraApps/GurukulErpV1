import { Injectable } from '@angular/core';

@Injectable()
export class GroupService {

  data = [{
    id: 1,
    GroupCode: 'AEI',
    GroupName: 'APPLIED',
    IsActive: '1',
    CreatedBy: '53',
    CreatedOn: '03/09/2018',
    ModifiedBy: '36',
    ModifiedOn: '02/09/2018',
  }, {
    id: 2,
    GroupCode: 'CR',
    GroupName: 'CIVILROYALS',
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
