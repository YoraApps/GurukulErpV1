import { Component, OnInit } from '@angular/core';
import { CourseService } from "../data/course.service";
import { BatchService } from "../data/batch.service";
import { ProgramStudyService } from "../data/program-study.service";
import { LocalDataSource } from "ng2-smart-table";

@Component({
  selector: 'ngx-fee-association',
  templateUrl: './fee-association.component.html',
  styleUrls: ['./fee-association.component.scss']
})
export class FeeAssociationComponent implements OnInit {

source: LocalDataSource = new LocalDataSource();
data;
  batchList: any[];
  courseList: any[];
  ProgramStudyList: any[];
  constructor(service: BatchService, _service: CourseService,private services:ProgramStudyService) {

    this.batchList = service.getData();
    this.courseList = _service.getData();
   }

  ngOnInit() {
    debugger
    this.services.getData()
          .subscribe( data => {
            this.data = data.results;
            console.log(this.data);
            this.ProgramStudyList = this.data;
            console.log(this.ProgramStudyList);
          });
  }

}

