import { Component, OnInit } from '@angular/core';
import { MatCalendarCellCssClasses } from '@angular/material/datepicker';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  public calendarData = {
    '29/4/2020': { title: 'Event 1', subtitle: 'Subtitel Event1', description: 'Description Event 1', image: 'https://i.imgur.com/2EV6C8U.jpg' },
    '2/4/2020': { title: 'Event 2', subtitle: 'Subtitel Event2', description: 'Description Event 2', image: 'https://i.imgur.com/5g8ZzlV.jpg' },
    '3/4/2020': { title: 'Event 3', subtitle: 'Subtitel Event3', description: 'Description Event 3', image: 'https://i.imgur.com/fm4vlOH.jpg' },
    '4/4/2020': { title: 'Event 4', subtitle: 'Subtitel Event4', description: 'Description Event 4', image: 'https://i.imgur.com/uxZzh3J.jpg' },
    '5/4/2020': { title: 'Event 5', subtitle: 'Subtitel Event5', description: 'Description Event 5', image: 'https://i.imgur.com/mXW9Bgy.jpg' },
  };

  public selectedDate = new Date().toLocaleDateString();

  public selectCalendar = this.calendarData[this.selectedDate];

  constructor(

  ) { }

  ngOnInit(): void {
  }

  public dateClass = (d: Date): MatCalendarCellCssClasses => {
    if (!this.calendarData[d.toLocaleDateString()]) {
      return '';
    }
    return 'date-with-event';
  }

  public onSelectChange(localeDate: string): void {
    this.selectedDate = localeDate;
    this.selectCalendar = this.calendarData[localeDate];
  }

  public setLocale(date: Date): string {
    return date.toLocaleDateString();
  }


  // selectDates: string[] = ['3/1/2020', '2/1/2020', '5/1/2020', '4/3/2020'];

  // SelectdateClass = (d: Date): MatCalendarCellCssClasses => {
  //   return this.selectDates.some((s: string) => s === d.toLocaleDateString()) ? 'date-select' : '';
  // }
}
