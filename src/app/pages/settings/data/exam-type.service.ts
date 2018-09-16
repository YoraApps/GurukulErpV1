import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class ExamTypeService {

  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://testyora-001-site1.itempurl.com';

  getData(id) {
    return this.http.get<ExamObject>(this.baseUrl + '/api/ExaminationTypes/GetAllExamType?UniversityId=' + id);
  }
}

export interface Exam {
      ExaminationTypeId: number;
      ExamGroup: string;
      ExamName: string;
}

export interface ExamObject {
    results: Exam[];
}

