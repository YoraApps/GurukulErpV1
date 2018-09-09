import { Injectable } from '@angular/core';

@Injectable()
export class AdmissionFeeStatusService {

  data = [{
    ApplicationNumber: 103652,
    Name: 'Gopi',
    ApplicationFormFee: 1000,
    EntranceExamFee	: 2000,
    TotalFeesToBePaid: 1500,
    TotalFeesPaid: 2000,
    PaymentStatus: 'NOTPAID',
  },
  {
    ApplicationNumber: 103652,
    Name: 'Gopi',
    ApplicationFormFee: 1000,
    EntranceExamFee	: 1000,
    TotalFeesToBePaid: 1500,
    TotalFeesPaid: 3000,
    PaymentStatus: 'NOTPAID',
  },

];

  getData() {
    return this.data;
  }
}
