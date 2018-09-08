import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { TransportationRoutingModule, routedComponents } from './transportation-routing.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { SmartTableService } from '../../@core/data/smart-table.service';

import { LocationService } from './data/location.service';
import { VehicleService } from './data/vehicle.service';
import { DriverMasterService } from './data/driver-master.service';


@NgModule({
  imports: [
    ThemeModule,
    Ng2SmartTableModule,
    TransportationRoutingModule,
  ],
  declarations: [
    ...routedComponents,
  ],
  providers: [
    SmartTableService,
    LocationService,
    VehicleService,
    DriverMasterService,
  ],
})
export class TransportationModule { }
