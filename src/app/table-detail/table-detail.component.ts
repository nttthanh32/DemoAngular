import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Schedule, Schedules } from '../schedule';

@Component({
  selector: 'app-table-detail',
  templateUrl: './table-detail.component.html',
  styleUrls: ['./table-detail.component.css'],
})
export class TableDetailComponent implements OnInit {
  public scheduleId: Schedule | any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    for (let schedule of Schedules) {
      if (schedule.period === id) {
        this.scheduleId = schedule;
      }
    }
  }
}
