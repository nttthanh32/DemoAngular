export interface Schedule {
  period: number;
  startTime: string;
  endTime: string;
  Monday: string;
  Tuesday: string;
  Wednesday: string;
  Thursday: string;
  Friday: string;
  Saturday: string;
  Sunday: string;
  color: string;
}

export const Schedules: Schedule[] = [
  {
    period: 1,
    startTime: '07:00',
    endTime: '07:45',
    Monday: 'Math',
    Tuesday: 'English',
    Wednesday: 'Literature',
    Thursday: 'Physical Education',
    Friday: 'Physics',
    Saturday: 'Self-Learning',
    Sunday: 'Self-Learning',
    color: '#DB4952'
  },
  {
    period: 2,
    startTime: '07:45',
    endTime: '08:30',
    Monday: 'Math',
    Tuesday: 'English',
    Wednesday: 'Literature',
    Thursday: 'Physical Education',
    Friday: 'History',
    Saturday: 'Self-Learning',
    Sunday: 'Self-Learning',
    color: '#2555BA'
  },
  {
    period: 3,
    startTime: '09:00',
    endTime: '09:45',
    Monday: 'Geography',
    Tuesday: 'Chemistry',
    Wednesday: 'Biology',
    Thursday: 'English',
    Friday: 'English',
    Saturday: 'Self-Learning',
    Sunday: 'Self-Learning',
    color: '#AA33FF'
  },
  {
    period: 4,
    startTime: '09:45',
    endTime: '10:30',
    Monday: 'Literature',
    Tuesday: 'Civic Education',
    Wednesday: 'Math',
    Thursday: 'English',
    Friday: 'Biology',
    Saturday: 'Self-Learning',
    Sunday: 'Self-Learning',
    color: '#F7E480'
  },
  {
    period: 5,
    startTime: '10:30',
    endTime: '11:15',
    Monday: 'English',
    Tuesday: 'Physics',
    Wednesday: 'Math',
    Thursday: 'Chemistry',
    Friday: 'Geography',
    Saturday: 'Self-Learning',
    Sunday: 'Self-Learning',
    color: '#6671FA'
  },
  {
    period: 6,
    startTime: '13:00',
    endTime: '13:45',
    Monday: 'Self-Learning',
    Tuesday: 'Self-Learning',
    Wednesday: 'Self-Learning',
    Thursday: 'Self-Learning',
    Friday: 'Self-Learning',
    Saturday: 'Self-Learning',
    Sunday: 'Self-Learning',
    color: '#ED182A'
  },
  {
    period: 7,
    startTime: '13:45',
    endTime: '14:30',
    Monday: 'English',
    Tuesday: 'Self-Learning',
    Wednesday: 'Chemistry',
    Thursday: 'Self-Learning',
    Friday: 'Literature',
    Saturday: 'Self-Learning',
    Sunday: 'Self-Learning',
    color: '#FC43CF'
  },
  {
    period: 8,
    startTime: '15:00',
    endTime: '15:45',
    Monday: 'English',
    Tuesday: 'Physics',
    Wednesday: 'Physics',
    Thursday: 'Math',
    Friday: 'Math',
    Saturday: 'Self-Learning',
    Sunday: 'Self-Learning',
    color: '#227372'
  },
  {
    period: 9,
    startTime: '15:45',
    endTime: '16:30',
    Monday: 'Literature',
    Tuesday: 'Math',
    Wednesday: 'English',
    Thursday: 'Math',
    Friday: 'English',
    Saturday: 'Self-Learning',
    Sunday: 'Self-Learning',
    color: '#12FF00'
  },
  {
    period: 10,
    startTime: '16:30',
    endTime: '17:15',
    Monday: 'Chemistry',
    Tuesday: 'Math',
    Wednesday: 'English',
    Thursday: 'Literature',
    Friday: 'Self-Learning',
    Saturday: 'Self-Learning',
    Sunday: 'Self-Learning',
    color: '#FF2358'
  }
];
