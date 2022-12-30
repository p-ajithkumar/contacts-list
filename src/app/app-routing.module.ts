import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowDataComponent } from './show-data/show-data.component';

const routes: Routes = [
  {path:'',redirectTo:'data',pathMatch:'full'},
  {path:'data',component:ShowDataComponent},
  {path:'**',component:ShowDataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
