import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DegreeTypeService } from './degree-type.service';
import { DegreeCategoryService } from './degree-category.service';
import { CourseService } from './course.service';
import { BranchService } from './branch.service';
import { BatchService } from './batch.service';
import { LocationService } from './location.service';
import { VehicleService } from './vehicle.service';
import { DriverMasterService } from './driver-master.service';
import { ClassRoomService } from './classroom.service';
import { ClubService } from './club.service';


const SERVICES = [
  DegreeTypeService,
  CourseService,
  DegreeCategoryService,
  BranchService,
  BatchService,
  LocationService,
  VehicleService,
  DriverMasterService,
  ClassRoomService,
  ClubService,
];

@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [
    ...SERVICES,
  ],
})
export class SettingDataModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: SettingDataModule,
      providers: [
        ...SERVICES,
      ],
    };
  }
}
