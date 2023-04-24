import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OgdComponent } from './ogd.component';

const routes: Routes = [
  {
    path: '',
    component: OgdComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OgdRoutingModule {}
