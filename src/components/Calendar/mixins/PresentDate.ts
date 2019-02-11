import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      presentYear: new Date(Date.now()).getFullYear(),
      presentMonth: new Date(Date.now()).getMonth(),
      presentDay: new Date(Date.now()).getDate()
    };
  },
  methods: {
    isPresent(date: Date): boolean {
      return (
        this.presentYear === date.getFullYear() &&
        this.presentMonth === date.getMonth() &&
        this.presentDay === date.getDate()
      );
    }
  }
});
