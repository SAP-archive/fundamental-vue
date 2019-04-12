export default {
  data() {
    return {
      presentYear: new Date(Date.now()).getFullYear(),
      presentMonth: new Date(Date.now()).getMonth(),
      presentDay: new Date(Date.now()).getDate()
    };
  },
  methods: {
    isPresent(date) {
      return (
        this.presentYear === date.getFullYear() &&
        this.presentMonth === date.getMonth() &&
        this.presentDay === date.getDate()
      );
    }
  }
};
