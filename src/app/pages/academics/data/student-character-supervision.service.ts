import { Injectable } from '@angular/core';

@Injectable()
export class StudentCharacterSupervisionService {

  data = [{
    ReportName: 'Disturbance',
    StudentName: 'Santanu',
    CounsellorName: 'Punit',
    Excellent	: '	NA',
    Standard: '	NA',
    Disturbance: '	NA',
    Remark: '	NA',

  },
 {
    ReportName: 'Disturbance',
    StudentName: 'Gopi',
    CounsellorName: 'Punit',
    Excellent	: '	NA',
    Standard: '	NA',
    Disturbance: 'NA',
    Remark: 'NA',
  },

];

  getData() {
    return this.data;
  }
}
