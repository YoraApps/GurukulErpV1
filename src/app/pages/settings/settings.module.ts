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
import { LocationService } from './data/location.service';
import { VehicleService } from './data/vehicle.service';
import { DriverMasterComponent } from './driver-master/driver-master.component';
import { DriverMasterService } from './data/driver-master.service';
@NgModule({
  imports: [
    ThemeModule,
    Ng2SmartTableModule,
    SettingsRoutingModule,
    Ng2SmartTableModule,
  ],
  declarations: [
    ...routedComponents,
    DriverMasterComponent,
  ],
  providers: [
    DegreeTypeService,
    DegreeCategoryService,
    CourseService,
    BatchService,
    SmartTableService,
    BranchService,
    LocationService,
    VehicleService,
    DriverMasterService,
  ],
})
export class SettingsModule { }
