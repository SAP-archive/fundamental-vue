const makeDefaultRange = () => ({
  hour24: {
    min: "00",
    max: "23"
  },
  hour12: {
    min: "01",
    max: "12"
  },
  minute: {
    min: "00",
    max: "59"
  },
  second: {
    min: "00",
    max: "59"
  },
  meridian: {
    min: "am",
    max: "pm"
  }
});

export default {
  methods: {
    checkValueRange(timeValue, timeType) {
      return (
        !isNaN(Number(timeValue)) &&
        (Number(timeValue) >= Number(this.range[timeType].min) &&
          Number(timeValue) <= Number(this.range[timeType].max))
      );
    }
  },
  data() {
    return {
      range: makeDefaultRange()
    };
  }
};
