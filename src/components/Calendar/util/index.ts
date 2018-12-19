import * as Types from './types';
export type Week = Types.Week;
export type Month = Types.Month;

type Options = {
  firstDayOfWeek: number;
};

export const weekFromDate = (date: Date, { firstDayOfWeek }: Options = { firstDayOfWeek: 0 }): Week => {
  const startOfWeek = new Date(date.valueOf());
  startOfWeek.setDate(date.getDate() - date.getDay() + firstDayOfWeek);

  const endOfWeek = new Date(date.valueOf());
  endOfWeek.setDate(date.getDate() + ((7 - firstDayOfWeek) - date.getDay()));

  const days: Week = [];
  let dayOfWeek = 0;
  while(dayOfWeek < 7) {
    const dayInWeek = new Date(startOfWeek.valueOf());
    dayInWeek.setDate(dayInWeek.getDate() + dayOfWeek);
    days.push(dayInWeek);
    dayOfWeek++;
  }
  return days;
};

export const monthFromDate = (referenceDate: Date, options: Options = { firstDayOfWeek: 0 }): Month => {
  const month = referenceDate.getMonth();
  const result: Month = [];
  const firstDayOfMonth = new Date(referenceDate.getFullYear(), month, 1);
  const firstWeek = weekFromDate(firstDayOfMonth, options);
  const [startingDate] = firstWeek;
  let currentMonth = month;
  while(currentMonth === month) {
    const week = weekFromDate(startingDate, options);
    result.push(week);
    startingDate.setDate(startingDate.getDate() + 7);
    currentMonth = startingDate.getMonth();
  }
  return result;
};

export const sameYear = (lhs: Date, rhs: Date) => lhs.getFullYear() === rhs.getFullYear();
export const sameMonth = (lhs: Date, rhs: Date) => sameYear(lhs, rhs) && lhs.getMonth() === rhs.getMonth();
export const sameDay = (lhs: Date, rhs: Date) => sameMonth(lhs, rhs) && lhs.getDate() === rhs.getDate();
export const earlierDate = (lhs: Date, rhs: Date): Date => lhs.getTime() < rhs.getTime() ? lhs : rhs;
export const laterDate = (lhs: Date, rhs: Date): Date => lhs.getTime() < rhs.getTime() ? rhs : lhs;
