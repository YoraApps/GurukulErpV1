import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { ManageSettingsRoutingModule, routedComponents } from './manage-settings-routing.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { SmartTableService } from '../../@core/data/smart-table.service';
import { ProgramSemAssociationService } from './data/program-sem-association.service';




@NgModule({
  imports: [
    ThemeModule,
    Ng2SmartTableModule,
    ManageSettingsRoutingModule,
  ],
  declarations: [
    ...routedComponents,
  ],
  providers: [
    SmartTableService,
    ProgramSemAssociationService,
  ],
})
export class ManageSettingsModule { }
