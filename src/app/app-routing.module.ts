import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SurveyComponent} from "./components/survey/survey.component";


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/survey/belonging'
  },
  {
    path: 'survey/:surveyKey',
    component: SurveyComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
