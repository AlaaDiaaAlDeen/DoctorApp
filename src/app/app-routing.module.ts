import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDocComponent } from './pages/add-doc/add-doc.component';
import { AllDocsComponent } from './pages/all-docs/all-docs.component';
import { AllproductsComponent } from './pages/allproducts/allproducts.component';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';
import { SingleDocComponent } from './pages/single-doc/single-doc.component';

const routes: Routes = [
  // {path:'', component:HomeComponent},
  // {path:'register', component:RegisterComponent},
  // {path:'shop', component:AllproductsComponent}
  {path:'', component:AddDocComponent},
  {path:'alldocs', component:AllDocsComponent},
  {path:'alldocs/:id', component:SingleDocComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
