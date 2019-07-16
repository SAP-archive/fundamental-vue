// @ts-check

export const weekFromDate = (date, { firstDayOfWeek } = { firstDayOfWeek: 0 }) => {
  const startOfWeek = new Date(date.valueOf());
  startOfWeek.setDate(date.getDate() - date.getDay() + firstDayOfWeek);

  const endOfWeek = new Date(date.valueOf());
  endOfWeek.setDate(date.getDate() + (7 - firstDayOfWeek - date.getDay()));

  const days = [];
  let dayOfWeek = 0;
  while (dayOfWeek < 7) {
    const dayInWeek = new Date(startOfWeek.valueOf());
    dayInWeek.setDate(dayInWeek.getDate() + dayOfWeek);
    days.push(dayInWeek);
    dayOfWeek++;
  }
  return days;
};

export const monthFromDate = (referenceDate, options = { firstDayOfWeek: 0 }) => {
  const month = referenceDate.getMonth();
  const result = [];
  const firstDayOfMonth = new Date(referenceDate.getFullYear(), month, 1);
  const firstWeek = weekFromDate(firstDayOfMonth, options);
  const [startingDate] = firstWeek;
  let currentMonth = month;
  while (currentMonth === month) {
    const week = weekFromDate(startingDate, options);
    result.push(week);
    startingDate.setDate(startingDate.getDate() + 7);
    currentMonth = startingDate.getMonth();
  }
  return result;
};
