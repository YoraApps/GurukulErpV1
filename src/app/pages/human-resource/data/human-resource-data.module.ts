import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';


const SERVICES = [
];

@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [
    ...SERVICES,
  ],
})

export class HumanResourceDataModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: HumanResourceDataModule,
      providers: [
        ...SERVICES,
      ],
    };
  }
}
