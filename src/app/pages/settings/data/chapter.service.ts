import { Injectable } from '@angular/core';

@Injectable()
export class ChapterService {

  data = [{
    id: 1,
    ChapterNumber: 'ELEMC01',
    ChapterTitle: 'Synchronous Motors',
    ModeofTeaching: 'Classroom',
    ChapterDetails: 'What it is, Where it is used, Why it is preferred',
    SKS: 10,
    IsActive: '1',
    CreatedBy: '53',
    CreatedOn: '03/09/2018',
    ModifiedBy: '36',
    ModifiedOn: '02/09/2018',
  }, {
    id: 2,
    ChapterNumber: 'MKK1231',
    ChapterTitle: 'DC Machines',
    ModeofTeaching: 'Classroom',
    ChapterDetails: 'Types, Windings, Generator/ Motor Characteristics',
    SKS: 5,
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
