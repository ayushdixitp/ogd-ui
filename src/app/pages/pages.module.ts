import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { PagesRoutes } from './pages.routing';

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(PagesRoutes)],
})
export class PagesModule {}
