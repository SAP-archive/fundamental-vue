import Vue from "vue";

export const eventsBus = new Vue();

export const events = {
  show: "show",
  hide: "hide",
  hideAll: "hideAll"
};
