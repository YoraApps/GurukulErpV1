import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HumanResourceComponent } from './human-resource.component';
import { StaffManagementComponent } from './staff-management/staff-management.component';
import { PayrollComponent } from './payroll/payroll.component';



const routes: Routes = [{
  path: '',
  component: HumanResourceComponent,
  children: [{
    path: 'staff-management',
    component: StaffManagementComponent,
  },{
    path: 'payroll',
    component: PayrollComponent,
  }
],
}];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class HumanResourceRoutingModule {

}

export const routedComponents = [
  HumanResourceComponent,
  StaffManagementComponent,
  PayrollComponent,
];
