import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdmissionListService } from './admission-list.service';

const SERVICES = [
  AdmissionListService,
];

@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [
    ...SERVICES,
  ],
})
export class AdmissionDataModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: AdmissionDataModule,
      providers: [
        ...SERVICES,
      ],
    };
  }
}
