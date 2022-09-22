import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Schedules } from '../schedule';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  constructor(private router: Router) {}

  schedules = Schedules;

  ngOnInit(): void {}

  onSelect(schedule: any) {
    this.router.navigate(['/table'], schedule.period);
  }
}
