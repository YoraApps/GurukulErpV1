/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './@core/core.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ThemeModule } from './@theme/theme.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ButtonViewComponent } from './pages/settings/popupbranch/popupbranch.component';
import { AuthGuardService } from './auth/auth-guard.service';
import { AuthService } from './auth/auth.service';
import { ReviewButtonViewComponent } from './pages/admission/reviewand-approve/reviewand-approve.component';
import { ModalComponent} from './pages/ui-features/modals/modal/modal.component'
import { BatchModalComponent } from './pages/settings/batch/batch-modal/batch-modal.component';
import { CourseModalComponent } from './pages/settings/course/course-modal/course-modal.component';
import { ScheduleComponent } from './pages/admission/scheduleexamination/schedule/schedule.component';
import { ScheduleExamModalService } from './pages/admission/data/scheduleexammodal.service';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { VehicalModelComponent } from './pages/transportation/vehicle/vehical-model/vehical-model.component';
import { DriverModelComponent } from './pages/transportation/driver-master/driver-model/driver-model.component';
import { LocationModelComponent } from './pages/transportation/location/location-model/location-model.component';
import { RouteCreationModelComponent } from './pages/transportation/routecreation/route-creation-model/route-creation-model.component';
import { AssignRouteModelComponent } from './pages/transportation/assign-route/assign-route-model/assign-route-model.component';
@NgModule({
  declarations: [AppComponent, 
    ButtonViewComponent,
    ReviewButtonViewComponent,
    ModalComponent,
    BatchModalComponent, 
    CourseModalComponent,
    ScheduleComponent,
    VehicalModelComponent,
    DriverModelComponent,
    LocationModelComponent,
    RouteCreationModelComponent,
    AssignRouteModelComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    Ng2SmartTableModule,

    NgbModule.forRoot(),
    ThemeModule.forRoot(),
    CoreModule.forRoot(),
  ],
  bootstrap: [AppComponent],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
    AuthGuardService,
    AuthService,
    ScheduleExamModalService
  ],
  entryComponents: [
    ButtonViewComponent,
    ReviewButtonViewComponent,
    ModalComponent,
    BatchModalComponent,
    CourseModalComponent,
    ScheduleComponent,
    VehicalModelComponent,
    DriverModelComponent,
    LocationModelComponent,
    RouteCreationModelComponent,
    AssignRouteModelComponent,
  ],
})
export class AppModule {
}
