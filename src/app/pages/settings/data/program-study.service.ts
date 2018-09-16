import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProgramStudyService {

   data = [{
    id: 1,
    ProgramStudyCode: '78125',
    ProgramStudyName: 'Farmasi',
    AcademicTerm: 'Semester',
    SKS: '150',
    IsActive: '1',
    CreatedBy: '53',
    CreatedOn: '03/09/2018',
    ModifiedBy: '36',
    ModifiedOn: '02/09/2018',
  }, {
    id: 2,
    ProgramStudyCode: '47986',
    ProgramStudyName: 'Teknik Lingkungan',
    AcademicTerm: 'Semester',
    SKS: '170',
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
