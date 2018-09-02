import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { AdmissionRoutingModule, routedComponents } from './admission-routing.module';
import { AdmissionListComponent } from './admission-list/admission-list.component';
import { AdmissionFormComponent } from './admission-form/admission-form.component';
import { AdmissionListService } from './data/admission-list.service';

@NgModule({
  imports: [
    ThemeModule,
    AdmissionRoutingModule,
  ],
  declarations: [
    ...routedComponents,
    AdmissionListComponent,
    AdmissionFormComponent,
  ],
  providers: [
    AdmissionListService,
  ],
})
export class AdmissionModule { }
