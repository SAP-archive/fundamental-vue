import earlierDate from "./earlier-date";
import laterDate from "./later-date";
import createNullDate from "./create-null-date";

/**
 * @typedef {object} DateObject
 * @prop {Date=} from
 * @prop {Date=} to
 */
export class NormalizedDate {
  /** @param {DateObject=} rawDate */
  static from(rawDate) {
    return new NormalizedDate(rawDate);
  }

  /** @param {DateObject=} raw */
  constructor(rawDate) {
    this.raw = rawDate != null ? rawDate : createNullDate();
  }

  asStartEndValue() {
    return {
      start: this.start,
      end: this.end
    };
  }

  asFromToValue() {
    return {
      from: this.from,
      to: this.to
    };
  }

  get from() {
    return this.raw.from;
  }

  get to() {
    return this.raw.to;
  }

  get isComplete() {
    return this.from != null && this.to != null;
  }
  get start() {
    if (this.to != null && this.from != null) {
      return earlierDate(this.from, this.to);
    }
    if (this.to == null && this.from == null) {
      return null;
    }
    if (this.from != null) {
      return this.from;
    }
    return null;
  }
  get end() {
    if (this.to != null && this.from != null) {
      return laterDate(this.from, this.to);
    }
    if (this.to == null && this.from == null) {
      return null;
    }
    if (this.to != null) {
      return this.to;
    }
    return null;
  }
  contains(date) {
    const { start, end } = this;
    if (start == null || end == null) {
      return false;
    }
    const startDate = start.getTime();
    const endDate = end.getTime();
    const time = date.getTime();
    return time >= startDate && time <= endDate;
  }
  containsYear(year) {
    const { start, end } = this;
    if (start == null && end == null) {
      return false;
    }
    if (start != null && end != null) {
      return year >= start.getFullYear() && year <= end.getFullYear();
    }
    if (start != null) {
      return start.getFullYear() === year;
    }
    if (end != null) {
      return end.getFullYear() === year;
    }
    return false;
  }
  containsMonth(month) {
    const { start, end } = this;
    if (start == null && end == null) {
      return false;
    }
    if (start != null && end != null) {
      return month >= start.getMonth() && month <= end.getMonth();
    }
    if (start != null) {
      return start.getMonth() === month;
    }
    if (end != null) {
      return end.getMonth() === month;
    }
    return false;
  }
}

/** @param {DateObject=} selection */
const createNormalizedDate = selection => {
  return NormalizedDate.from(selection);
};

export default createNormalizedDate;
