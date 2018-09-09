import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { TransportationRoutingModule, routedComponents } from './transportation-routing.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { SmartTableService } from '../../@core/data/smart-table.service';

import { LocationService } from './data/location.service';
import { VehicleService } from './data/vehicle.service';
import { DriverMasterService } from './data/driver-master.service';
import { RoutecreationComponent } from './routecreation/routecreation.component';
import { RoutecreationService } from "./data/routecreation.service";


@NgModule({
  imports: [
    ThemeModule,
    Ng2SmartTableModule,
    TransportationRoutingModule,
  ],
  declarations: [
    ...routedComponents,
    RoutecreationComponent,
  ],
  providers: [
    SmartTableService,
    LocationService,
    VehicleService,
    DriverMasterService,
    RoutecreationService,
  ],
})
export class TransportationModule { }
