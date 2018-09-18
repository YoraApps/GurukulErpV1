import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';

import { Ng2SmartTableModule } from 'ng2-smart-table';
import { SmartTableService } from '../../@core/data/smart-table.service';

import { AcademicsRoutingModule , routedComponents} from './academics-routing.module';
import { ConductComponent } from './conduct/conduct.component';
import { MemoCircularNoticeService } from './data/memo-circular-notice.service';
import { ApproveDeputationComponent } from './approve-deputation/approve-deputation.component';
import { TeacherNotesComponent } from './teacher-notes/teacher-notes.component';
import { TeacherNotesService } from "./data/teacher-notes.service";


@NgModule({
  imports: [
    ThemeModule,
    Ng2SmartTableModule,
    AcademicsRoutingModule,
  ],
  declarations: [
    ...routedComponents,
    ConductComponent,
    ApproveDeputationComponent,
    TeacherNotesComponent,
  ],
  providers: [
    SmartTableService,
    MemoCircularNoticeService,
    TeacherNotesService,
  ],
})
export class AcademicsModule { }
