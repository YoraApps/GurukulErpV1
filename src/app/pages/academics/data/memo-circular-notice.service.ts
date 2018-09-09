import { Injectable } from '@angular/core';

@Injectable()
export class MemoCircularNoticeService {

  data = [{
    ApplicationNumber: 103652,
    CandidateName: 'Gopi',
    EmailId: 'gopi@gmail.com',
    Address	: 'Guntur',
    DegreeCategory: 'pg',
    DegreeType: 'Master',
    Course: 'EEE',
    Batch: 101,
    AdmissionVerificationStatus: 'Completed',

  },
  {
    ApplicationNumber: 102356,
    CandidateName: 'Vijay',
    EmailId: 'vijay@gmail.com',
    Address: 'Ongole',
    DegreeCategory: 'pg',
    DegreeType: 'Doctorate',
    Course: 'EEE',
    Batch: 101,
    AdmissionVerificationStatus: 'Ongoing',

  },

];

  getData() {
    return this.data;
  }
}
