import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AddNutrientsComponent } from './components/add-nutrients/add-nutrients.component';
import { ListNutrientsComponent } from './components/list-nutrients/list-nutrients.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'listNutri', component: ListNutrientsComponent },
  { path: 'addNutri', component: AddNutrientsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
