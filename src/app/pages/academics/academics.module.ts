import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';

import { Ng2SmartTableModule } from 'ng2-smart-table';
import { SmartTableService } from '../../@core/data/smart-table.service';

import { AcademicsRoutingModule , routedComponents} from './academics-routing.module';


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
  ],
})
export class AcademicsModule { }
