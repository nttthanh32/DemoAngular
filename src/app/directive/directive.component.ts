import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class DirectiveComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title: string = "Morning Schedule";

  num: number = 0;

  showMe: boolean | undefined;
  
  morningSchedule: MorningSchedule[] = [
    {
    period: '1',
    startTime: '07:00',
    endTime: '07:45',
    Monday: 'Math',
    Tuesday: 'English',
    Wednesday: 'Literature',
    Thursday: 'Physical Education',
    Friday: 'Physics',
    Saturday: 'Self-Learning',
    Sunday: 'Self-Learning'
    },
    {
      period: '2',
      startTime: '07:45',
      endTime: '08:30',
      Monday: 'Math',
      Tuesday: 'English',
      Wednesday: 'Literature',
      Thursday: 'Physical Education',
      Friday: 'Physics',
      Saturday: 'Self-Learning',
      Sunday: 'Self-Learning'
    },
    {
      period: '3',
      startTime: '09:00',
      endTime: '09:45',
      Monday: 'Math',
      Tuesday: 'English',
      Wednesday: 'Literature',
      Thursday: 'Physical Education',
      Friday: 'Physics',
      Saturday: 'Self-Learning',
      Sunday: 'Self-Learning'
    },
    {
      period: '4',
      startTime: '09:45',
      endTime: '10:30',
      Monday: 'Math',
      Tuesday: 'English',
      Wednesday: 'Literature',
      Thursday: 'Physical Education',
      Friday: 'Physics',
      Saturday: 'Self-Learning',
      Sunday: 'Self-Learning'
    },
    {
      period: '5',
      startTime: '10:30',
      endTime: '11:15',
      Monday: 'Math',
      Tuesday: 'English',
      Wednesday: 'Literature',
      Thursday: 'Physical Education',
      Friday: 'Physics',
      Saturday: 'Self-Learning',
      Sunday: 'Self-Learning'
    }
  ]

}


class MorningSchedule {
  period: string | undefined;
  startTime: string | undefined;
  endTime: string | undefined;
  Monday: string | undefined;
  Tuesday: string | undefined;
  Wednesday: string | undefined;
  Thursday: string | undefined;
  Friday: string | undefined;
  Saturday: string | undefined;
  Sunday: string | undefined;
}
