import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RatingPageComponent } from './rating-page/rating-page.component';
import { ThanksComponent } from './thanks/thanks.component';

const routes: Routes = [
  { path: '', component: RatingPageComponent },
  { path: 'thanks-component', component: ThanksComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
