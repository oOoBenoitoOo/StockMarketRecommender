import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  getDates(startValue: string, endValue: string): Date[]{
    let dates = [];
    const theDate = this.setTimeZone(startValue);
    const endDate = this.setTimeZone(endValue);
    while (theDate <= endDate) {
      dates = [...dates, new Date(theDate)];
      theDate.setDate(theDate.getDate() + 1);
    }
    return dates;
  }

  setTimeZone(value: string): Date {
    const offset = new Date().getTimezoneOffset() / 60;
    const date = new Date(Date.parse(value + 'T00:00:00'));
    date.setHours(date.getHours() + offset);
    return date;
  }

}
