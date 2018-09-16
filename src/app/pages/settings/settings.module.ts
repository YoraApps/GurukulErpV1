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
import { PopupService } from './data/popup.service';
import { ExamTypeService } from './data/exam-type.service';
import { ChapterService } from './data/chapter.service';
import { ClassRoomService } from './data/classroom.service';
import { ClubService } from './data/club.service';
import { AcademicMasterService } from './data/academic-master.service';
import { FeeService } from './data/fee.service';
import { GroupService } from './data/group.service ';
import { ModalComponent } from '../ui-features/modals/modal/modal.component';
import { ProgramStudyComponent } from './program-study/program-study.component';
import { FacultyDepartmentComponent } from './faculty-department/faculty-department.component';
import { FacultyDepartmentService } from "./data/faculty-department.service";
import { ProgramStudyService } from "./data/program-study.service";

@NgModule({
  imports: [
    ThemeModule,
    Ng2SmartTableModule,
    SettingsRoutingModule,
    Ng2SmartTableModule,
  ],
  declarations: [
    ...routedComponents,
    ModalComponent,
    ProgramStudyComponent,
    FacultyDepartmentComponent,
  ],
  providers: [
    DegreeTypeService,
    DegreeCategoryService,
    CourseService,
    BatchService,
    PopupService,
    SmartTableService,
    BranchService,
    ExamTypeService,
    ChapterService,
    ClassRoomService,
    ClubService,
    AcademicMasterService,
    FeeService,
    GroupService,
    FacultyDepartmentService,
    ProgramStudyService,
  ],
  entryComponents: [
    ModalComponent
  ],
})
export class SettingsModule { }
