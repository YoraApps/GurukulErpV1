import { Injectable } from '@angular/core';

@Injectable()
export class BatchService {

  data = [{
    id: 1,
    BatchName: 'testing 15 agt 2018 | General',
    ResultType: 'GradeSystem',
    AcademicTerm : 'semister',
    IsActive: '1',
    CreatedBy: '53',
    CreatedOn: '03/09/2018',
    ModifiedBy: '36',
    ModifiedOn: '02/09/2018',
    button: 'View',
  }, {
    id: 2,
    BatchName: '	B 2018-19 | General',
    ResultType: 'Grading',
    AcademicTerm : 'half yealry',
    IsActive: '1',
    CreatedBy: '43',
    CreatedOn: '03/09/2018',
    ModifiedBy: '36',
    ModifiedOn: '02/09/2018',
    button: 'View',
  }];

  getData() {
    return this.data;
  }
}
