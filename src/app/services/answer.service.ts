import {Injectable} from '@angular/core';
import {Answer} from "../model/survey";
import {Observable, of} from "rxjs";
import {Demographics} from "../model/demographics";

@Injectable({
  providedIn: 'root'
})
export class AnswerService {

  constructor() {
  }

  submitAnswers(data: { answers: Answer[], demographics: Demographics} ): Observable<any> {
    // todo this will call server method when available
    return of(null);
  }
}
