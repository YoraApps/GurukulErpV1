import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManageSettingsComponent } from './manage-settings.component';
import { ProgramSemAssociationComponent } from './program-sem-association/program-sem-association.component';



const routes: Routes = [{
  path: '',
  component: ManageSettingsComponent,
  children: [{
      path: 'ngx-program-sem-association',
      component: ProgramSemAssociationComponent,
    },      
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
export class ManageSettingsRoutingModule {

}

export const routedComponents = [
  ManageSettingsComponent,
  ProgramSemAssociationComponent,
];
