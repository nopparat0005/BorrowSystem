import { SlicePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SlideComponent } from './site/slide/slide.component';
import { DeveloperComponent } from './site/developer/developer.component';
import { EquipComponent } from './site/equip/equip.component';
import { StepComponent } from './site/step/step.component';

const routes: Routes = [
  {path : '', component:SlideComponent},
  {path : 'dev', component:DeveloperComponent},
  {path : 'step', component:StepComponent},
  {path : 'equip', component:EquipComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
