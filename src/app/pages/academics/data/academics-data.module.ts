import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemoCircularNoticeService } from './memo-circular-notice.service';


const SERVICES = [
  MemoCircularNoticeService,
];

@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [
    ...SERVICES,
  ],
})
export class AcademicsDataModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: AcademicsDataModule,
      providers: [
        ...SERVICES,
      ],
    };
  }
}
