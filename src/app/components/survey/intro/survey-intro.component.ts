import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-survey-intro',
  templateUrl: './survey-intro.component.html',
  styleUrls: ['./survey-intro.component.scss']
})
export class SurveyIntroComponent implements OnInit {

  @Output() onStart = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  start() {
    this.onStart.emit();
  }
}
