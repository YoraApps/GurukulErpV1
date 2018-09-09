import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { AdmissionRoutingModule, routedComponents } from './admission-routing.module';
import { AdmissionListComponent } from './admission-list/admission-list.component';
import { AdmissionFormComponent } from './admission-form/admission-form.component';
import { AdmissionListService } from './data/admission-list.service';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { SmartTableService } from '../../@core/data/smart-table.service';
import { CounsellingComponent } from './counselling/counselling.component';
import { CounsellingService } from './data/counselling.service';
import { ApplicantCourseFeeStatusComponent } from './applicant-course-fee-status/applicant-course-fee-status.component';
import { AdmissionFeeStatusComponent } from './admission-fee-status/admission-fee-status.component';
import { ApplicantDetailModelComponent } from './counselling/applicant-detail-model/applicant-detail-model.component';



@NgModule({
  imports: [
    ThemeModule,
    AdmissionRoutingModule,
    Ng2SmartTableModule,
  ],
  declarations: [
    ...routedComponents,
    AdmissionListComponent,
    AdmissionFormComponent,
    CounsellingComponent,
    ApplicantCourseFeeStatusComponent,
    AdmissionFeeStatusComponent,
    ApplicantDetailModelComponent,
  ],
  entryComponents: [
    ApplicantDetailModelComponent,
  ],
  providers: [
    AdmissionListService,
    SmartTableService,
    CounsellingService,
  ],
})
export class AdmissionModule { }
