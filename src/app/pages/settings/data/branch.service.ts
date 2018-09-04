import { Injectable } from '@angular/core';

@Injectable()
export class BranchService {

  data = [{
    id: 1,
    CourseId: 1,
    CourseName: '1A',
    BranchCode: '101a',
    BranchName: 'ece',
    IsActive: 1,
    CreatedOn: '2-2-2019',
    ModifiedBy: 1,
    ModifiedOn: '2-2-2028',
  }, {
    id: 2,
    CourseId: 2,
    CourseName: '2A',
    BranchCode: '102a',
    BranchName: 'eee',
    IsActive: 1,
    CreatedOn: '2-2-2019',
    ModifiedBy: 1,
    ModifiedOn: '2-2-2028',
  }];

  getData() {
    return this.data;
  }
}
