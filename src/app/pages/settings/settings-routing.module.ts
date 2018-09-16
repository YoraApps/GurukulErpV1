import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SettingsComponent } from './settings.component';
import { DegreeCategoryComponent } from './degree-category/degree-category.component';
import { DegreeTypeComponent } from './degree-type/degree-type.component';
import { CourseComponent } from './course/course.component';
import { BranchComponent } from './branch/branch.component';
import { BatchComponent } from './batch/batch.component';
import { PresetComponent } from './preset/preset.component';

import { ExamTypeComponent } from './exam-type/exam-type.component';
import { ChapterComponent } from './chapter/chapter.component';

import { ClassroomComponent } from './classroom/classroom.component';
import { ClubComponent } from './club/club.component';
import { AcademicMasterComponent } from './academic-master/academic-master.component';
import { FeeComponent } from './fee/fee.component';
import { GroupComponent } from './group/group.component';
import { PopupbranchComponent } from './popupbranch/popupbranch.component';
import { ProgramStudyComponent } from './program-study/program-study.component';
import { FacultyDepartmentComponent } from './faculty-department/faculty-department.component';
import { GradeComponent } from "./grade/grade.component";

const routes: Routes = [{
  path: '',
  component: SettingsComponent,
  children: [{
    path: 'degree-category',
    component: DegreeCategoryComponent,
  }, {
    path: 'degree-type',
    component: DegreeTypeComponent,
  }, {
    path: 'course',
    component: CourseComponent,
  }, {
    path: 'branch',
    component: BranchComponent,
  }, {
    path: 'batch',
    component: BatchComponent,
  }, {
    path: 'classroom',
    component: ClassroomComponent,
  }, {
    path: 'club',
    component: ClubComponent,
  }, {
    path: 'preset',
    component: PresetComponent,
  }, {
    path: 'exam-type',
    component: ExamTypeComponent,
  }, {
    path: 'chapter',
    component: ChapterComponent,
  }, {
    path: 'academic-master',
    component: AcademicMasterComponent,
  }, {
    path: 'fee',
    component: FeeComponent,
  }, {
    path: 'group',
    component: GroupComponent,
  }, {
    path: 'faculty-department',
    component: FacultyDepartmentComponent,
  }, {
    path: 'program-study',
    component: ProgramStudyComponent,
  },
  {
    path: 'grade',
    component: GradeComponent,
  },
   {
    path: 'popupbranch',
    component: PopupbranchComponent,
  }],
}];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class SettingsRoutingModule {

}

export const routedComponents = [
  SettingsComponent,
  DegreeCategoryComponent,
  DegreeTypeComponent,
  CourseComponent,
  BranchComponent,
  BatchComponent,
  PresetComponent,
  ExamTypeComponent,
  ChapterComponent,
  ClassroomComponent,
  AcademicMasterComponent,
  FeeComponent,
  GroupComponent,
  ClubComponent,
  ProgramStudyComponent,
  FacultyDepartmentComponent,
  PopupbranchComponent,
  GradeComponent,
];
