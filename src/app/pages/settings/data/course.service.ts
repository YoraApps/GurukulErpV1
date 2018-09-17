import { Injectable } from '@angular/core';

@Injectable()
export class CourseService {

  data = [{
    id: 1,
    CourseCode: '101a',
    CourseName: 'networks',
    TotalSKS: '150',
    CourseType: 'Optinal',
    CourseGroup: 'Semester 2 CS',
    PrerequisiteCourse: 'Information Security',
    IsActive: 1,
    CourseBy: 1,
    CreatedOn: '2-2-2019',
    ModifiedBy: 1,
    ModifiedOn: '2-2-2028',
  }, {
    id: 2,
    CourseCode: '102a',
    CourseName: 'Computers',
    TotalSKS: '140',
    CourseType: 'Optinal',
    CourseGroup: 'HSC',
    PrerequisiteCourse: 'Mechanics',
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
