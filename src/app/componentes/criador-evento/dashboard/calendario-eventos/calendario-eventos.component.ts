import { Component, OnInit } from '@angular/core';

import { CalendarOptions } from '@fullcalendar/angular';

@Component({
  selector: 'app-calendario-eventos',
  templateUrl: './calendario-eventos.component.html',
  styleUrls: ['./calendario-eventos.component.scss']
})
export class CalendarioEventosComponent implements OnInit {

  constructor() { }

  events: any[];

  options: any;

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    height: 650
  };

  ngOnInit(): void {

  }

}
