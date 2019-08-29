<template>
  <div>
    <div class="playground">
      <fd-field-set>
        <fd-form-item>
          <fd-form-label>Notification Title</fd-form-label>
          <fd-input v-model="title" placeholder="Title" />
        </fd-form-item>
        <fd-form-item>
          <fd-form-label>Notification Content</fd-form-label>
          <fd-text-area v-model="content" />
        </fd-form-item>
        <fd-form-item>
          <fd-form-label>Timeout (ms)</fd-form-label>
          <fd-input :disabled="permanent" type="number" v-model="timeout" />
        </fd-form-item>
        <fd-form-group>
          <fd-form-item-toggle label="Permanent">
            <fd-toggle v-model="permanent" />
          </fd-form-item-toggle>
          <fd-form-item-toggle label="Dismissible">
            <fd-toggle v-model="dismissible" />
          </fd-form-item-toggle>
        </fd-form-group>
        <br /><br />
        <fd-form-item>
          <fd-form-label>Notification Type</fd-form-label>
          <fd-select v-model="type">
            <option v-for="t in types" :key="t">{{ t }}</option>
          </fd-select>
        </fd-form-item>
      </fd-field-set>
      <fd-button @click="notify" styling="emphasized" type="positive"
        >Create Notification
      </fd-button>
    </div>
    <fd-notifications></fd-notifications>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      timeout: 2000,
      permanent: false,
      dismissible: true,
      content: "Watashi ga kita!",
      types: ["default", "warning", "error", "information", "success"],
      type: "default"
    };
  },
  methods: {
    notify() {
      const notification = {
        type: this.type,
        title: this.title,
        content: this.content,
        permanent: this.permanent,
        dismissible: this.dismissible
      };
      if (!this.permanent) {
        notification.timeout = this.timeout;
      }
      this.$fdNotifications.show(notification);
    }
  },
  mounted() {
    this.notify();
  }
};
</script>

<style lang="scss">
.playground {
  width: 600px;
  height: 550px;
  border: 1px solid;
  margin: auto;
  padding: 20px;
  margin-top: calc(40vh - 300px);
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}

.playground .fd-button--emphasized {
  width: 100%;
}
</style>
