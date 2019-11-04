/**
 *  @typedef {object} Time
 *  @prop {number} hour
 *  @prop {number} minute
 *  @prop {number} second
 */

/** @param {number} hour */
const _increasingHour = hour => {
  if (hour < 23) {
    return hour + 1
  }
  return 0
}

/** @param {number} hour */
const _decreasingHour = hour => {
  if (hour > 0) {
    return hour - 1
  }
  return 23
}

/**
 * @param {{hour: number; minute: number}} time
 * @returns {{hour: number; minute: number}}
 */
const _increasingMinute = ({ hour, minute }) => {
  if (minute < 59) {
    return { hour, minute: minute + 1 }
  }
  return {
    hour: _increasingHour(hour),
    minute: 0
  }
}

/**
 * @param {{hour: number; minute: number}} time
 * @returns {{hour: number; minute: number}}
 */
const _decreasingMinute = ({ hour, minute }) => {
  if (minute > 0) {
    return { hour, minute: minute - 1 }
  }
  return {
    hour: _decreasingHour(hour),
    minute: 59
  }
}

/**
 * @returns {Time}
 */
const _increasingSecond = ({ hour, minute, second }) => {
  if (second < 59) {
    return { hour, minute, second: second + 1 }
  }
  return { ..._increasingMinute({ hour, minute }), second: 0 }
}

/**
 * @returns {Time}
 */
const _decreasingSecond = ({ hour, minute, second }) => {
  if (second > 0) {
    return { hour, minute, second: second - 1 }
  }
  return { ..._decreasingMinute({ hour, minute }), second: 59 }
}

/**
 * @param {{hour: number; minute: number; second: number}} time
 */
export default ({ hour, minute, second }) => {
  /** @returns {Time} */
  const increaseSecond = () => {
    return _increasingSecond({ hour, minute, second })
  }

  /** @returns {Time} */
  const increaseMinute = () => {
    return { ..._increasingMinute({ hour, minute }), second }
  }
  /** @returns {Time} */
  const increaseHour = () => {
    return { hour: _increasingHour(hour), minute, second }
  }
  /** @returns {Time} */
  const decreaseSecond = () => {
    return _decreasingSecond({ hour, minute, second })
  }
  /** @returns {Time} */
  const decreaseMinute = () => {
    return { ..._decreasingMinute({ hour, minute }), second }
  }

  /** @returns {Time} */
  const decreaseHour = () => {
    return { hour: _decreasingHour(hour), minute, second }
  }

  const increase = unit => {
    switch (unit) {
      case 'hour':
        return increaseHour()
      case 'minute':
        return increaseMinute()
      case 'second':
        return increaseSecond()
    }
    throw Error('Serious programmer error.')
  }

  const decrease = unit => {
    switch (unit) {
      case 'hour':
        return decreaseHour()
      case 'minute':
        return decreaseMinute()
      case 'second':
        return decreaseSecond()
    }
    throw Error('Serious programmer error.')
  }
  return {
    decreaseHour,
    decreaseMinute,
    decreaseSecond,
    increaseHour,
    increaseMinute,
    increaseSecond,
    increase,
    decrease
  }

  // const mapObjectToArray = ({ hour, minute, second }) => [hour, minute, second];
  // /**
  //  * @param {number} hour
  //  * @param {number} minute
  //  * @param {number} second
  //  */
  // export default (hour, minute, second) => {
  //   const result = createFromObject({ hour, minute, second });
  //   return {

  //   }
  // }

  // export default class TimeComponents {
  // /**
  //  * @param {number} hour
  //  * @param {number} minute
  //  * @param {number} second
  //  */
  //   constructor(hour, minute, second) {
  //     this.hour = hour;
  //     this.minute = minute;
  //     this.second = second;
  //     /** @type {Time}  */
  //     this.state = [hour, minute, second];
  //   }

  //   // ([hour, minute, second]) => {
  //   // let state = [hour, minute, second];

  //   increaseSecond() {
  //     this.state = _increasingSecond(this.state);
  //     return this;
  //   }

  //   increaseMinute() {
  //     const [hour, minute, second] = this.state;
  //     this.state = [..._increasingMinute([hour, minute]), second];
  //     return this;
  //   }

  //   increaseHour() {
  //     const [hour, minute, second] = this.state;
  //     this.state = [_increasingHour(hour), minute, second];
  //     return this;
  //   }

  //   decreaseSecond() {
  //     this.state = _decreasingSecond(this.state);
  //     return this;
  //   }

  //   decreaseMinute() {
  //     const [hour, minute, second] = this.state;
  //     this.state = [..._decreasingMinute([hour, minute]), second];
  //     return this;
  //   }

  //   decreaseHour() {
  //     const [hour, minute, second] = this.state;
  //     this.state = [_decreasingHour(hour), minute, second];
  //     return this;
  //   }

  //   get value() {
  //     return [...this.state];
  //   }
  // }
}
