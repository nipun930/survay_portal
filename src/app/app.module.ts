import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './components/app.component';
import {SurveyComponent} from './components/survey/survey.component';
import {SurveyIntroComponent} from './components/survey/intro/survey-intro.component';
import {SurveyDemographicsComponent} from './components/survey/demographics/survey-demographics.component';
import {SurveyQuestionComponent} from './components/survey/question/survey-question.component';
import {ThanksComponent} from './components/survey/thanks/thanks.component';

@NgModule({
  declarations: [
    AppComponent,
    SurveyComponent,
    SurveyIntroComponent,
    SurveyDemographicsComponent,
    SurveyQuestionComponent,
    ThanksComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
