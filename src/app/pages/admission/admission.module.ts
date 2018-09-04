import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { AdmissionRoutingModule, routedComponents } from './admission-routing.module';
import { AdmissionListComponent } from './admission-list/admission-list.component';
import { AdmissionFormComponent } from './admission-form/admission-form.component';
import { AdmissionListService } from './data/admission-list.service';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { SmartTableService } from '../../@core/data/smart-table.service';

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
  ],
  providers: [
    AdmissionListService,
    SmartTableService,
  ],
})
export class AdmissionModule { }
