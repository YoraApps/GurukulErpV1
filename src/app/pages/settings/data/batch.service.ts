import { Injectable } from '@angular/core';

@Injectable()
export class BatchService {

  data = [{
    id: 1,
    BranchId: 'fghjk',
    BatchCode: '021356',
    BatchName: 'Yora batch',
    IsActive: '1',
    CreatedBy: '53',
    CreatedOn: '03/09/2018',
    ModifiedBy: '36',
    ModifiedOn: '02/09/2018',
  }, {
    id: 2,
    BranchId: 'piuyc',
    BatchCode: '045691',
    BatchName: 'ECE batch',
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