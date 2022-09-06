import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { LocaleListComponent } from './locale-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/locales',
    pathMatch: 'full',
  },
  { path: 'locales', component: LocaleListComponent },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)],
})
export class LocaleListRoutingModule {}
