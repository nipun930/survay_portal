import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {Survey} from "../../../model/survey";

@Component({
  selector: 'app-survey-question',
  templateUrl: './survey-question.component.html',
  styleUrls: ['./survey-question.component.scss']
})
export class SurveyQuestionComponent implements OnInit, OnChanges {

  @Input() survey: Survey;
  // @Input() question: Question;
  @Input() question;
  // @Output() onNext = new EventEmitter<Answer>();
  @Output() onNext = new EventEmitter();
  @Output() onPrevious = new EventEmitter();

  questionIndex: number;
  progressBarWidth = 0;

  constructor() {
  }

  ngOnInit(): void {
    // this.questionIndex = this.survey?.questions?.findIndex(q => q.key === this.question?.key);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.questionIndex = this.survey?.questions?.findIndex(q => q.key === this.question?.key);
    this.progressBarWidth = ((this.questionIndex+1)/this.survey?.questions?.length)*100;

  }

  next() {
    if (this.question?.value) {
      let answer = {
        key: this.question.key,
        text: this.question.text,
        leftLabel: this.question.leftLabel,
        rightLabel: this.question.rightLabel,
        categories: this.question.categories,
        steps: this.question.steps,
        surveyKey: this.survey.key,
        value: this.question.value,
      };
      this.onNext.emit(answer);
    }
  }

  // next() {
  //   if (this.question?.value) {
  //     // todo get answer from slider selection
  //     let answer: Answer = {
  //       surveyKey: this.survey.key,
  //       questionKey: this.question.key,
  //       value: this.question["value"]
  //     };
  //     this.onNext.emit(answer);
  //   }
  // }
  previous(){
    if(this.questionIndex){
      this.onPrevious.emit('');
    }
  }

  selectAnswer(value){
    this.question["value"] = value
  }

}
