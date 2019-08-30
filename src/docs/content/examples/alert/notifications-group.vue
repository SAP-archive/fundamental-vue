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
        <fd-form-group inline>
          <fd-form-item-toggle label="Permanent">
            <fd-toggle v-model="permanent" />
          </fd-form-item-toggle>
          <fd-form-item-toggle label="Dismissible">
            <fd-toggle v-model="dismissible" />
          </fd-form-item-toggle>
        </fd-form-group>
        <br />
        <br />
        <fd-form-item>
          <fd-form-label>Target Group</fd-form-label>
          <fd-select v-model="group">
            <option v-for="g in groups" :key="g">{{ g }}</option>
          </fd-select>
        </fd-form-item>

        <fd-form-item>
          <fd-form-label>Notification Type</fd-form-label>
          <fd-select v-model="type">
            <option v-for="t in types" :key="t">{{ t }}</option>
          </fd-select>
        </fd-form-item>
      </fd-field-set>
      <fd-button @click="notify" styling="emphasized" type="positive"
        >Create Notification</fd-button
      >
      <br />
      <br />
      <div class="clear-notfications">
        <fd-form-item>
          <fd-form-label>Target group</fd-form-label>
          <fd-select v-model="hideAllTarget">
            <option :value="''">All</option>
            <option v-for="g in groups" :key="g">{{ g }}</option>
          </fd-select>
        </fd-form-item>

        <fd-button @click="hideAll" styling="emphasized" type="negative" icon="decline"
          >Clear Notifications</fd-button
        >
      </div>
    </div>
    <fd-notifications
      v-for="(group, idx) in groups"
      :key="idx"
      :group="group"
      :position="positions[idx]"
    ></fd-notifications>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      timeout: 2000,
      type: "default",
      permanent: false,
      dismissible: true,
      hideAllTarget: "",
      group: "topRight",
      content: "Watashi ga kita!",
      types: ["default", "warning", "error", "information", "success"],
      groups: ["topRight", "topLeft", "topCenter", "bottomRight", "bottomLeft", "bottomCenter"],
      positions: [
        ["top", "right"],
        ["top", "left"],
        ["top", "center"],
        ["bottom", "right"],
        ["bottom", "left"],
        ["bottom", "center"]
      ]
    };
  },
  methods: {
    notify() {
      const notification = {
        type: this.type,
        title: this.title,
        group: this.group,
        content: this.content,
        permanent: this.permanent,
        dismissible: this.dismissible,
        onDismiss: n => {
          //   do whatever you want here
          return n;
        }
      };
      if (!this.permanent) {
        notification.timeout = this.timeout;
      }
      this.$fdNotifications.show(notification);
    },
    hideAll() {
      this.$fdNotifications.hideAll(this.hideAllTarget ? this.hideAllTarget : null);
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
  height: 750px;
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
