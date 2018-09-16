import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FacultyDepartmentService {

   data = [{
    id: 1,
    FacultyDepartmentCode: 'FSSPSC08',
    FacultyDepartmentName: 'Program Pascasarjana',
    FacultyDepartmentDescription: 'Law of Economics and Manga',
    IsActive: '1',
    CreatedBy: '53',
    CreatedOn: '03/09/2018',
    ModifiedBy: '36',
    ModifiedOn: '02/09/2018',
  }, {
    id: 2,
    FacultyDepartmentCode: 'FSSPSC05',
    FacultyDepartmentName: 'Fakultas Agama Islam',
    FacultyDepartmentDescription: 'Laboratory Fee',
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
