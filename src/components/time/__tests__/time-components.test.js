import timeFrom from './../time-components'

describe('time components', () => {
  it('increase seconds of 0:0:0 twice', () => {
    const r1 = timeFrom({ hour: 0, minute: 0, second: 0 }).increaseSecond()
    expect(r1).toMatchObject({ hour: 0, minute: 0, second: 1 })
    const r2 = timeFrom(r1).increaseSecond()
    expect(r2).toMatchObject({ hour: 0, minute: 0, second: 2 })
  })

  it('increase throws for undefined unit', () => {
    expect(() => timeFrom({ hour: 0, minute: 0, second: 0 }).increase()).toThrow()
  })

  it('decrease throws for undefined unit', () => {
    expect(() => timeFrom({ hour: 0, minute: 0, second: 0 }).decrease()).toThrow()
  })

  it("decrease throws for 'xxx' unit", () => {
    expect(() => timeFrom({ hour: 0, minute: 0, second: 0 }).decrease('xxx')).toThrow()
  })

  it("increase throws for 'xxx' unit", () => {
    expect(() => timeFrom({ hour: 0, minute: 0, second: 0 }).increase('xxx')).toThrow()
  })

  it('increase works for second', () => {
    expect(timeFrom({ hour: 0, minute: 0, second: 0 }).increase('second')).toMatchObject({
      hour: 0,
      minute: 0,
      second: 1
    })
  })

  it('increase works for minute', () => {
    expect(timeFrom({ hour: 0, minute: 0, second: 0 }).increase('minute')).toMatchObject({
      hour: 0,
      minute: 1,
      second: 0
    })
  })

  it('increase works for hour', () => {
    expect(timeFrom({ hour: 0, minute: 0, second: 0 }).increase('hour')).toMatchObject({
      hour: 1,
      minute: 0,
      second: 0
    })
  })

  it('increase seconds of 0:0:58 until it overflows', () => {
    const r1 = timeFrom({ hour: 0, minute: 0, second: 58 }).increaseSecond()
    expect(r1).toMatchObject({ hour: 0, minute: 0, second: 59 })
    const r2 = timeFrom(r1).increaseSecond()
    expect(r2).toMatchObject({ hour: 0, minute: 1, second: 0 })
  })

  it('increase minutes of 0:58:1 until it overflows', () => {
    const r1 = timeFrom({ hour: 0, minute: 58, second: 1 }).increaseMinute()
    expect(r1).toMatchObject({ hour: 0, minute: 59, second: 1 })
    const r2 = timeFrom(r1).increaseMinute()
    expect(r2).toMatchObject({ hour: 1, minute: 0, second: 1 })
  })

  it('increase hours of 22:0:1 until it overflows', () => {
    const r1 = timeFrom({ hour: 22, minute: 0, second: 1 }).increaseHour()
    expect(r1).toMatchObject({ hour: 23, minute: 0, second: 1 })
    const r2 = timeFrom(r1).increaseHour()
    expect(r2).toMatchObject({ hour: 0, minute: 0, second: 1 })
  })

  it('decrease seconds of 0:0:2 twice', () => {
    const r1 = timeFrom({ hour: 0, minute: 0, second: 2 }).decreaseSecond()
    expect(r1).toMatchObject({ hour: 0, minute: 0, second: 1 })
    const r2 = timeFrom(r1).decreaseSecond()
    expect(r2).toMatchObject({ hour: 0, minute: 0, second: 0 })
  })

  it('decrease seconds of 0:1:2 until it underflows', () => {
    const r1 = timeFrom({ hour: 0, minute: 1, second: 2 }).decreaseSecond()
    const r2 = timeFrom(r1).decreaseSecond()
    const r3 = timeFrom(r2).decreaseSecond()
    expect(r1).toMatchObject({ hour: 0, minute: 1, second: 1 })
    expect(r2).toMatchObject({ hour: 0, minute: 1, second: 0 })
    expect(r3).toMatchObject({ hour: 0, minute: 0, second: 59 })
  })

  it('decrease minutes of 2:2:1 until it underflows', () => {
    const r1 = timeFrom({ hour: 2, minute: 2, second: 1 }).decreaseMinute()
    const r2 = timeFrom(r1).decreaseMinute()
    const r3 = timeFrom(r2).decreaseMinute()
    expect(r1).toMatchObject({ hour: 2, minute: 1, second: 1 })
    expect(r2).toMatchObject({ hour: 2, minute: 0, second: 1 })
    expect(r3).toMatchObject({ hour: 1, minute: 59, second: 1 })
  })

  it('decrease hours of 2:0:1 until it underflows', () => {
    const r1 = timeFrom({ hour: 2, minute: 0, second: 1 }).decreaseHour()
    const r2 = timeFrom(r1).decreaseHour()
    const r3 = timeFrom(r2).decreaseHour()
    expect(r1).toMatchObject({ hour: 1, minute: 0, second: 1 })
    expect(r2).toMatchObject({ hour: 0, minute: 0, second: 1 })
    expect(r3).toMatchObject({ hour: 23, minute: 0, second: 1 })
  })
})
