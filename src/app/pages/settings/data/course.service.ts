import { Injectable } from '@angular/core';

@Injectable()
export class CourseService {

  data = [{
    id: 1,
    DegreeTypeId: 1,
    DegreeName: 'diploma',
    CourseCode: '101a',
    CourseName: 'networks',
    TotalSKS:10,
    IsActive: 1,
    CourseBy: 1,
    CreatedOn: '2-2-2019',
    ModifiedBy: 1,
    ModifiedOn: '2-2-2028',
  }, {
    id: 2,
    DegreeTypeId: 2,
    DegreeName: 'pg',
    CourseCode: '102a',
    CourseName: 'Computers',
    IsActive: 1,
    CourseBy: 1,
    CreatedOn: '2-2-2019',
    ModifiedBy: 1,
    ModifiedOn: '2-2-2028',
  }];

  getData() {
    return this.data;
  }
}
