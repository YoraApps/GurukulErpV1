import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';

import { Ng2SmartTableModule } from 'ng2-smart-table';
import { SmartTableService } from '../../@core/data/smart-table.service';

import { AcademicsRoutingModule , routedComponents} from './academics-routing.module';
import { ConductComponent } from './conduct/conduct.component';
import { MemoCircularNoticeService } from './data/memo-circular-notice.service';


@NgModule({
  imports: [
    ThemeModule,
    Ng2SmartTableModule,
    AcademicsRoutingModule,
  ],
  declarations: [
    ...routedComponents,
    ConductComponent,
  ],
  providers: [
    SmartTableService,
    MemoCircularNoticeService,
  ],
})
export class AcademicsModule { }
