import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SettingsComponent } from './settings.component';
import { DegreeCategoryComponent } from './degree-category/degree-category.component';
import { DegreeTypeComponent } from './degree-type/degree-type.component';
import { CourseComponent } from './course/course.component';
import { BranchComponent } from './branch/branch.component';
import { BatchComponent } from './batch/batch.component';
import { PresetComponent } from './preset/preset.component';

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
    path: 'preset',
    component: PresetComponent,
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
];
