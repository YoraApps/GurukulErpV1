import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SemesterService {

  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://testyora-001-site1.itempurl.com';

  getData() {
    return this.http.get<SemesterObject>(this.baseUrl + '/api/CourseMasters/Get');
  }

   saveData(data) {
    debugger
    this.http.post(this.baseUrl + "/api/CourseMasters/Save", data)
      .subscribe(
      data1 => {
        console.log('POST Request is successful ' + data1);
      },
      error => {
        console.log('Error' + error);
      },
    );
  }

  removeData(CourseId) {
    this.http.post(this.baseUrl + '/api/CourseMasters/Delete?CourseId=' + CourseId, null)
      .subscribe(
      data => {
        console.log('PUT Request is successful ' + data);
      },
      error => {
        console.log('Error' + error);
      },
    );
  }

}

export interface Semester{
   ProgramStudyId: number;
        CourseId: number;
        CourseCode: string;
        CourseName: string;
        SKS: number;
        CourseType: string;
        CourseGroup: string;
        UniversityId?: any;
        active?: any;
        lastupdateddt?: any;
        lastupdatedby?: any;
        MinSKS?: any;

}
  export interface SemesterObject {
  results: Semester[];
}


