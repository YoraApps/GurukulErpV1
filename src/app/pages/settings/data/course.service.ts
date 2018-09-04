import { Injectable } from '@angular/core';

@Injectable()
export class CourseService {

  data = [{
    id: 1,
    DegreeTypeId: 'diploma',
    CourseCode: '101a',
    CourseName: 'networks',
    IsActive: 1,
    CourseBy: 1,
    CreatedOn: '2-2-2019',
    ModifiedBy: 1,
    ModifiedOn: '2-2-2028',
  }, {
    id: 2,
    DegreeTypeId: 'pg',
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
