import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DegreeTypeService } from './degree-type.service';

const SERVICES = [
  DegreeTypeService,
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
