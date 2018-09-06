import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { SettingsRoutingModule, routedComponents } from './settings-routing.module';
import { DegreeTypeService } from './data/degree-type.service';
import { DegreeCategoryService } from './data/degree-category.service';
import { CourseService } from './data/course.service';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { SmartTableService } from '../../@core/data/smart-table.service';
import { BranchService } from './data/branch.service';
import { BatchService } from './data/batch.service';
import { ClassroomComponent } from './classroom/classroom.component';
import { ClubComponent } from './club/club.component';
import { ClassRoomService } from './data/classroom.service';
import { ClubService } from './data/club.service';

@NgModule({
  imports: [
    ThemeModule,
    Ng2SmartTableModule,
    SettingsRoutingModule,
    Ng2SmartTableModule,
  ],
  declarations: [
    ...routedComponents,
    ClassroomComponent,
    ClubComponent,
  ],
  providers: [
    DegreeTypeService,
    DegreeCategoryService,
    CourseService,
    BatchService,
    SmartTableService,
    BranchService,
    ClassRoomService,
    ClubService,
  ],
})
export class SettingsModule { }
