import { Component, Vue } from 'vue-property-decorator';

@Component
export default class extends Vue {
  public render() {
    return (
      <vf-ui style='text-align: center;'>
        <p slot='header'>Header</p>
        <p slot='footer'>Footer</p>
        <p slot='sidebar'>Sidebar</p>
        <div>hello</div>
      </vf-ui>
    );
  }
}
