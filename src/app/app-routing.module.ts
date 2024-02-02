import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiCommponetComponent } from './api-commponet/api-commponet.component';

const routes: Routes = [];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
