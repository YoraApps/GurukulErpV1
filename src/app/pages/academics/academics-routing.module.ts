import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AcademicsComponent } from './academics.component';
import { MemoCircularNoticeComponent } from './memo-circular-notice/memo-circular-notice.component';
import { ConductComponent } from './conduct/conduct.component';
import { CampaignManagementComponent } from './campaign-management/campaign-management.component';
import { ApproveDeputationComponent } from "./approve-deputation/approve-deputation.component";
import { TeacherNotesComponent } from "./teacher-notes/teacher-notes.component";

const routes: Routes = [{
  path: '',
  component: AcademicsComponent,
  children: [{
      path: 'memo-circular-notice',
      component: MemoCircularNoticeComponent,
    }, {
      path: 'conduct',
      component: ConductComponent,
    },{
      path: 'approvedeputation',
      component: ApproveDeputationComponent,
    },
    {
      path: 'teachernote',
      component: TeacherNotesComponent,
    },
     {
      path: 'Campaign-Management',
      component: CampaignManagementComponent,
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
export class AcademicsRoutingModule {

}

export const routedComponents = [
  AcademicsComponent,
  MemoCircularNoticeComponent,
  ConductComponent,
  CampaignManagementComponent,
  ApproveDeputationComponent,
  TeacherNotesComponent,
];
