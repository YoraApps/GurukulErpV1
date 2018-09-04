import { Injectable } from '@angular/core';

@Injectable()
export class AdmissionListService {

  data = [{
    AdmissionId: 1,
    AdmissionNumber: 101,
    CandidateId: 1,
    CandidateName: 'krishna',
    DegreeCategoryId: 1,
    DegreeCategoryName: 'pg',
    DegreeTypeId: 1,
    DegreeTypeName: 'ug',
    CourseId: 1,
    CourseName: 'computers',
    BatchId: 101,
    BatchName: 'juniors',
    BranchId: 505,
    BranchName: 'cse',
    AdmissionStatusId: 1001,
    AdmissionStatusName: 'A',

  },
  {
    AdmissionId: 2,
    AdmissionNumber: 102,
    CandidateId: 1,
    CandidateName: 'krishna',
    DegreeCategoryId: 1,
    DegreeCategoryName: 'pg',
    DegreeTypeId: 1,
    DegreeTypeName: 'ug',
    CourseId: 1,
    CourseName: 'computers',
    BatchId: 101,
    BatchName: 'juniors',
    BranchId: 505,
    BranchName: 'cse',
    AdmissionStatusId: 1001,
    AdmissionStatusName: 'A',

  },

];

  getData() {
    return this.data;
  }
}
