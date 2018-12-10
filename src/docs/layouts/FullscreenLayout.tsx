import {
  Vue,
  Component,
} from 'vue-property-decorator';

@Component({ name: 'FullscreenLayout' })
export class FullscreenLayout extends Vue {
  public render() { return <router-view />; }
}
