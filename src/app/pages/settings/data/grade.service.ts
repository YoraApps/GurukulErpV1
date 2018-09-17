import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GradeService {

   data = [{
    id: 1,
    GradeCode: '15',
    GradeName: 'Refundable',
    GradeValue: 'Tuition Fee',
    Percentage: '85%',
    IsActive: '1',
    CreatedBy: '53',
    CreatedOn: '03/09/2018',
    ModifiedBy: '36',
    ModifiedOn: '02/09/2018',
  }, {
    id: 2,
    GradeCode: 'Laboratory Fee',
    GradeName: 'Non-Refundable',
    GradeValue: 'Laboratory Fee',
    Percentage: '75%',
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



