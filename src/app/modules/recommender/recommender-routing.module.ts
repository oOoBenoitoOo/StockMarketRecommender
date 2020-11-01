import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { PageComponent } from './components/page/page.component';
import { ResultComponent } from './components/result/result.component';

const routes: Routes = [
  { path: '', component: FormComponent },
  { path: 'result', component: ResultComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecommenderRoutingModule { }
