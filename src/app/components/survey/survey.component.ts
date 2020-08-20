import {Component, OnInit} from '@angular/core';
import {SurveyService} from "../../services/survey.service";
import {ActivatedRoute} from "@angular/router";
import {Answer} from "../../model/survey";
import {finalize} from "rxjs/operators";
import {Demographics} from "../../model/demographics";
import {AnswerService} from "../../services/answer.service";

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.scss']
})
export class SurveyComponent implements OnInit {

  stage: 'intro' | 'questions' | 'demographics' | 'thanks';

  loading: boolean;
  loadError: any;

  saving: boolean;
  saveError: any;

  // survey: Survey;
  survey;
  // currentQuestion: Question;
  currentQuestion;

  answers: {[_key: string]: Answer};
  demographics: Demographics;

  constructor(private route: ActivatedRoute,
              private surveyService: SurveyService,
              private answerService: AnswerService) { }

  ngOnInit(): void {
    this.stage = 'intro';
    this.route.params.subscribe(params => {
      let surveyKey = params['surveyKey'];
      this.loading = true;
      this.surveyService.getSurvey(surveyKey)
        .pipe(finalize(() => this.loading = false))
        .subscribe(
          survey => this.survey = survey,
            error => this.loadError = error
        )
    });
  }

  start() {
    this.stage = 'questions';
    this.currentQuestion = this.survey.questions[0];
    this.answers = {};
  }

  nextQuestion(questionResponse) {
    let questions = this.survey.questions;
    let index = questions.findIndex(q => q.key === this.currentQuestion.key);
    this.survey.questions[index] = questionResponse;
    if (index < questions.length - 1) {
      this.currentQuestion = questions[index + 1];
    } else {
      this.stage = 'demographics';
    }
  }

  previousQuestion(){
    let questions = this.survey.questions;
    let index = questions.findIndex(q => q.key === this.currentQuestion.key);
    this.currentQuestion = questions[index - 1];
  }

  submitDemographics(demographics: Demographics) {
    this.demographics = demographics;
    this.submit();
  }

  submit() {

    let data = {
      demographics: this.demographics,
      answers: Object.values(this.answers)
    };

    this.saving = true;
    this.saveError = null;
    this.answerService.submitAnswers(data)
      .pipe(finalize(() => this.saving = false))
      .subscribe(
        response => this.stage = 'thanks',
        error => this.saveError = error
      );
  }
}
