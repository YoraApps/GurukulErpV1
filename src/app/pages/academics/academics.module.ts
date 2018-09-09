import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';

import { Ng2SmartTableModule } from 'ng2-smart-table';
import { SmartTableService } from '../../@core/data/smart-table.service';

import { AcademicsRoutingModule , routedComponents} from './academics-routing.module';
//import { CampaignManagementService } from './data/campaign-management.service';


@NgModule({
  imports: [
    ThemeModule,
    Ng2SmartTableModule,
    AcademicsRoutingModule,
  ],
  declarations: [
    ...routedComponents,
  ],
  providers: [
    SmartTableService,
    //CampaignManagementService
  ],
})
export class AcademicsModule { }
