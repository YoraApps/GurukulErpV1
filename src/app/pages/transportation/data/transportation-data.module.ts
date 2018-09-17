import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationService } from './location.service';
import { VehicleService } from './vehicle.service';
import { DriverMasterService } from './driver-master.service';
import { AssignRouteComponent } from "../assign-route/assign-route.component";



const SERVICES = [
  LocationService,
  VehicleService,
  DriverMasterService,
];

@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [
    ...SERVICES,
  ],
  declarations: [AssignRouteComponent],
})
export class TransportationDataModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: TransportationDataModule,
      providers: [
        ...SERVICES,
      ],
    };
  }
}
