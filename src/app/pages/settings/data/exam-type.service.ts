import { Injectable } from '@angular/core';

@Injectable()
export class ExamTypeService {

  data = [{
    id: 1,
    ExamGroup: 'AN001',
    ExamName: 'Half Yealry Exam',
    Remarks: 'You are absence',
    IsActive: '1',
    CreatedBy: '53',
    CreatedOn: '03/09/2018',
    ModifiedBy: '36',
    ModifiedOn: '02/09/2018',
  }, {
    id: 2,
    ExamGroup: 'HLF001',
    ExamName: 'Annual Exam',
    Remarks: 'Exam postponed',
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
