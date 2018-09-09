import { Injectable } from '@angular/core';

@Injectable()
export class ReviewandApproveService {

  data = [{
    ApplicationNumber: 103652,
    ApplicantName: 'Gopi',
    DocumentStatus: 'Document Not Aknowledged',
    ApplicationStatus	: 'Document Reviewed',
    button: 'Button #1',
  },
  {
    ApplicationNumber: 102356,
    ApplicantName: 'Vijay',
    DocumentStatus: 'Document Not Aknowledged',
    ApplicationStatus: 'Admission Form Approved',
    button: 'Button #2',

  },

];

  getData() {
    return this.data;
  }
}
