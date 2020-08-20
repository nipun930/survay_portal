import {Component, EventEmitter, OnInit, Output, Input} from '@angular/core';
import {Demographics} from "../../../model/demographics";
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Survey } from 'src/app/model/survey';

@Component({
  selector: 'app-survey-demographics',
  templateUrl: './survey-demographics.component.html',
  styleUrls: ['./survey-demographics.component.scss']
})
export class SurveyDemographicsComponent implements OnInit {

  @Output() onSubmit = new EventEmitter<Demographics>();
  @Input() survey: Survey;

  personalIdentityForm: FormGroup;
  employmentStatusForm: FormGroup;
  professionalBackground: FormGroup;

  hsConstant = '< HighSchool';
  currentIndex = 1;
  previousQuestions;
  validationCSS = false;

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.createForms();
    this.previousQuestions = this.survey?.questions
  }

  createForms(){
    this.personalIdentityForm = this.fb.group({
      gender: [null, Validators.required],
      otherGenderDesc: [null],
      age: [null, Validators.required],
      country: [null, Validators.required],
      state: [null, Validators.required],
      LGBTI: [null, Validators.required],
      parentingRes: [null, Validators.required],
      caringRes: [null, Validators.required],
      disability: [null, Validators.required],
      socioEconomicStatusinChildhood: [null, Validators.required],
    })

    this.employmentStatusForm = this.fb.group({
      employeeStatus: [null, Validators.required],
      hierarchicalLevel: [null, Validators.required],
      employmentArrangement: [null, Validators.required],
    });

    this.professionalBackground = this.fb.group({
      education: [null, Validators.required],
      role: [null, Validators.required],
      organisationType: [null, Validators.required],
      organisation: [null, Validators.required],
      organisationDivision: [null, Validators.required],
      industry: [null, Validators.required],
      location: [null, Validators.required],
      workLocationSameAsPassport: [null, Validators.required],
    })
  } 


  submit() {
    if(this.personalIdentityForm.valid && this.employmentStatusForm.valid && this.professionalBackground.valid){
      // console.log('personalIdentityForm',this.personalIdentityForm);
      // console.log('employmentStatusForm',this.employmentStatusForm);
      // console.log('professionalBackground',this.professionalBackground);
      this.validationCSS = false;
      let details = {
        personalIdentity: this.personalIdentityForm.value,
        employmentStatusForm: this.employmentStatusForm.value,
        professionalBackground: this.professionalBackground.value,
      };
      this.onSubmit.emit(details);
    } else{
      this.validationCSS = true;
      // console.log('please do select all required fields');
      //  console.log('personalIdentityForm',this.personalIdentityForm);
      // console.log('employmentStatusForm',this.employmentStatusForm);
      // console.log('professionalBackground',this.professionalBackground);
    }
  }

}
