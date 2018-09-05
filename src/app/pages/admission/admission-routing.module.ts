import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdmissionComponent } from './admission.component';
import { AdmissionListComponent } from './admission-list/admission-list.component';
import { AdmissionFormComponent } from './admission-form/admission-form.component';
import { CounsellingComponent } from './counselling/counselling.component';


const routes: Routes = [{
  path: '',
  component: AdmissionComponent,
  children: [{
    path: 'admission-list',
    component: AdmissionListComponent,
  }, {
    path: 'admission-form',
    component: AdmissionFormComponent,
  },{
    path: 'counselling',
    component: CounsellingComponent,
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
export class AdmissionRoutingModule {

}

export const routedComponents = [
  AdmissionComponent,
  AdmissionListComponent,
  AdmissionFormComponent,
  CounsellingComponent,
];
