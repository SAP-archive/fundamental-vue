<template>
  <div>
    <!-- <div class="fd-time">
  <div class="fd-time__item">
      <div class="fd-time__control">
          <button class="fd-button--light sap-icon--navigation-up-arrow"
          aria-label="Increase hours" aria-controls="1610C873"></button>
      </div>
      <input class="fd-time__input fd-input" type="text" placeholder="hh" value="02" id="1610C873" aria-label="Hours"/>
      <div class="fd-time__control">
          <button class="fd-button--light sap-icon--navigation-down-arrow"
          aria-label="Decrease hours" aria-controls="1610C873"></button>
      </div>
  </div>

  <div class="fd-time__item">
      <div class="fd-time__control">
          <button class="fd-button--light sap-icon--navigation-up-arrow"
          aria-label="Increase minutes" aria-controls="DDlHR199"></button>
      </div>
      <input class="fd-time__input fd-input" type="text" placeholder="mm" value="34" id="DDlHR199" aria-label="Minutes"/>
      <div class="fd-time__control">
          <button class="fd-button--light sap-icon--navigation-down-arrow"
          aria-label="Decrease minutes" aria-controls="DDlHR199"></button>
      </div>
  </div>
  <div class="fd-time__item">
      <div class="fd-time__control">
          <button class="fd-button--light sap-icon--navigation-up-arrow"
          aria-label="Increase seconds" aria-controls="8CAnL947"></button>
      </div>
      <input class="fd-time__input fd-input" type="text" placeholder="ss" value="56" id="8CAnL947" aria-label="Seconds"/>
      <div class="fd-time__control">
          <button class="fd-button--light sap-icon--navigation-down-arrow"
          aria-label="Decrease seconds" aria-controls="8CAnL947"></button>
      </div>
  </div>
  <div class="fd-time__item">
      <div class="fd-time__control">
          <button class="fd-button--light sap-icon--navigation-up-arrow"
          aria-label="Increase period" aria-controls="sEWOL676"></button>
      </div>
      <input class="fd-time__input fd-input" type="text" placeholder="am" value="pm" id="sEWOL676" aria-label="Period"/>
      <div class="fd-time__control">
          <button class="fd-button--light sap-icon--navigation-down-arrow"
          aria-label="Decrease period" aria-controls="sEWOL676"></button>
      </div>
  </div>
</div> -->
    <fd-time v-model="time" />
    <!-- <fd-time-item /> -->
    <!-- <fd-time-item
      v-for="item in timeitems"
      :key="item.type"
      :type="item.type"
      :value="item.value"
    ></fd-time-item> -->
  </div>
</template>

<script>
export default {
  methods: {
    onTimeUpdate(time) {
      console.log(time) // eslint-disable-line no-console
    }
  },
  data() {
    return {
      time: {
        hour: 23,
        minute: 59,
        second: 59
      }
    }
  }
}
</script>
