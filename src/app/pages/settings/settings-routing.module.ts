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

import { LocationComponent } from './location/location.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { DriverMasterComponent } from './driver-master/driver-master.component';
import { ClassroomComponent } from './classroom/classroom.component';
import { ClubComponent } from './club/club.component';

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
  },
  {
    path: 'classroom',
    component: ClassroomComponent,
  },
  {
    path: 'club',
    component: ClubComponent,
  },
   {
    path: 'preset',
    component: PresetComponent,
  }, {
    path: 'exam-type',
    component: ExamTypeComponent,
  }, {
    path: 'chapter',
    component: ChapterComponent,
  },
  {
    path: 'location',
    component: LocationComponent,
  },
  {
    path: 'vehicle',
    component: VehicleComponent,
  },
  {
    path: 'driver',
    component:DriverMasterComponent,
  },
],
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
  LocationComponent,
  VehicleComponent,
  DriverMasterComponent,
  ClassroomComponent,
];
