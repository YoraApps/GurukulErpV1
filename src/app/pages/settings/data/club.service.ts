import { Injectable } from '@angular/core';

@Injectable()
export class ClubService {

  data = [{
    ClubCode: 1,
    ClubName: 'Newton',
    ClubDescription: 'Newton description',
    },
   {
    ClubCode: 2,
    ClubName: 'Espouse2A',
    ClubDescription: 'Espouse Edu Erp Club',
  }];

  getData() {
    return this.data;
  }
}

