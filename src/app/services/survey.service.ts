import { Injectable } from '@angular/core';
import { SliderQuestion, Survey } from "../model/survey";
import { Observable, of } from "rxjs";

const sliderQuestion = (key, categories, text, left: string, right: string, steps = 10): SliderQuestion => {
  return {
    type: 'slider',
    key: key,
    categories: categories,
    text: text,
    leftLabel: left,
    rightLabel: right,
    steps: steps
  }
};

const surveys: Survey[] = [
  {
    key: 'belonging',
    title: 'The Belonging Index',
    questions: [

      // pg 1

      sliderQuestion('q1', ['purpose'],
        'What purpose drives you or what are you more motivated by?',
        'Social Impact', 'Financial success'),

      sliderQuestion('q2', ['relationships'],
        'How do you prefer to work?',
        'In a Group', 'As an Individual'),

      sliderQuestion('q3', ['relationships'],
        'When you build relationships at work, what do you prefer?',
        'Family (few and deep)', 'Tribe (many and fun)'),
      sliderQuestion('q4', ['purpose'],
        'How do you like your success?',
        'Shared', 'Individual'),

      sliderQuestion('q5', ['purpose', 'agency'],
        'How does the purpose of your organisation come to life for you?',
        'In the work I personally do', 'In my organisation\'s reputation'),

      sliderQuestion('q6', ['affirmation'],
        'Would you rather hear \'thank you\' or see how it impacts someone else?',
        `Hear ‘thank you'`, `'See' impact of my work`),

      // pg 2

      sliderQuestion('q7', ['fairness'],
        'In the balance between individuality and equality, what is more important to you?',
        'Everyone treated the same', 'Each person treated individually'),

      sliderQuestion('q8', ['relationships'],
        'Do you have a lot of valuable relationships at work or a small number of high-quality ones?',
        'High Quality across just a few relationships', 'High Quantity of good relationships'),

      sliderQuestion('q9', ['change', 'stability'],
        'Should organisational structures be agile and flexible or stable and secure?',
        'Flexible and changing', 'Stable and Secure'),

      sliderQuestion('q10', ['change', 'stability'],
        'Do you prefer to know what\'s expected or comfortable to write your own path?',
        'Know what\'s expected', 'Write my own path'),

      sliderQuestion('q11', ['change', 'stability', 'agency'],
        'Do you prefer well considered priorities or to change or add goals to address new opportunities?',
        'Stable Priorities', 'Changing Goals'),

      sliderQuestion('q12', ['accountability', 'generosity'],
        'If you don\'t turn up for a day does someone fill in and all is well, or is it hard on the team?',
        'Leave a big gap', 'Team covers easily'),

      // pg 3

      sliderQuestion('q13', ['accountability'],
        'Your role is important to help the organisation achieve its goals',
        'Super important', 'The same importance as everyone else'),

      sliderQuestion('q14', ['purpose'],
        'The purpose of the organization aligns and makes sense with my work',
        'Yes, but could be improved', 'Purpose and my work align perfectly'),

      sliderQuestion('q15', ['relationships', 'anchor'],
        'If you didn\'t show up would someone care?',
        'Nobody', 'Everyone'),

      sliderQuestion('q16', ['agency'],
        'If you spoke to your leader\'s boss, your leader would be...?',
        'Angry', 'Expect you to'),

      sliderQuestion('q17', ['generosity', 'accountability'],
        'Looking at ensuring everyone feels like they are included and belong, how do you see this as part of your role?',
        'Not really my role', 'A critical part of my role'),

      sliderQuestion('q18', ['growth', 'change', 'stability'],
        'Jobs may change over time. Do you prefer to constantly learn new things or to master something?\n',
        'Master', 'Constantly learn new things'),

      // pg 4

      sliderQuestion('q19', ['fairness'],
        'Is your workplace fair for you?',
        'No', 'Yes'),

      sliderQuestion('q20', ['fairness'],
        'Is your workplace fair for others?',
        'No', 'Yes'),

      sliderQuestion('q21', ['agency'],
        'You have all the freedom you need to do your job well',
        'Not Enough', 'Too much'),

      sliderQuestion('q22', ['agency', 'accountability'],
        'Is it an important part of your role to create new ideas and improve things?',
        'Not really, I have other priorities', 'Absolutely, it\'s a constant expectation'),

      sliderQuestion('q23', ['agency', 'change', 'growth'],
        'When there is a lot of change happening, do you prefer a clear directive or freedom to navigate the change?',
        'Clear directive', 'Freedom to navigate the change'),

      sliderQuestion('q24', ['relationships', 'accountability'],
        'Do you prefer to work in a team of equals or where people rely on you?',
        'We\'re all equal', 'Everyone relies on me'),

      // pg 5

      sliderQuestion('q25', ['purpose'],
        'When you have an idea on how to improve, how often is it implemented?',
        'Rarely', 'Always'),

      sliderQuestion('q26', ['purpose'],
        'The actions and plans of organization align with the work I want to do?',
        'Often out of alignment', 'Align perfectly'),

      sliderQuestion('q27', ['growth'],
        'When you\'re doing your job really well, what means more to you?',
        'Opportunity and development', 'Reward and Acknowledgement'),

      sliderQuestion('q28', ['safety'],
        'When I am concerned about an action my organization is taking, there are great ways to have my views heard?',
        'There is not really a place to raise different views', 'My organization always values countrary views'),

      sliderQuestion('q29', ['fairness'],
        'Are paid fairly for your contribution?',
        'Not really', 'Yes'),

      sliderQuestion('q30', ['fairness'],
        'Are the hours you\'re expected to work fair?',
        'Not really', 'Yes'),

      sliderQuestion('q31', ['belonging'],
        'Do you feel you belong?',
        'Not really', 'Absolutely'),
    ]
  }
];

@Injectable({
  providedIn: 'root'
})
export class SurveyService {

  constructor() {
  }

  getSurvey(key: string): Observable<Survey> {
    return of(surveys.find(s => s.key === key));
  }
}
