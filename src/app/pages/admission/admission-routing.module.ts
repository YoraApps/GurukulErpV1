import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdmissionComponent } from './admission.component';
import { AdmissionListComponent } from './admission-list/admission-list.component';
import { AdmissionFormComponent } from './admission-form/admission-form.component';
import { CounsellingComponent } from './counselling/counselling.component';
import { ApplicantCourseFeeStatusComponent } from './applicant-course-fee-status/applicant-course-fee-status.component';
import { AdmissionFeeStatusComponent } from './admission-fee-status/admission-fee-status.component';
import { ReviewandApproveComponent} from './reviewand-approve/reviewand-approve.component';


const routes: Routes = [{
  path: '',
  component: AdmissionComponent,
  children: [{
    path: 'admission-list',
    component: AdmissionListComponent,
  }, {
    path: 'admission-form',
    component: AdmissionFormComponent,
  }, {
    path: 'counselling',
    component: CounsellingComponent,
  }, {
    path: 'reviewand-approve',
    component: ReviewandApproveComponent,
  }, {
    path: 'applicant-course-fee-status',
    component: ApplicantCourseFeeStatusComponent,
  }, {
    path: 'admission-fee-status',
    component: AdmissionFeeStatusComponent,
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
  ReviewandApproveComponent,
  ApplicantCourseFeeStatusComponent,
  AdmissionFeeStatusComponent

];
