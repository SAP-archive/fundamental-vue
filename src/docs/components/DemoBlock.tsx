import {
  Component,
  Prop,
  Vue,
} from 'vue-property-decorator';

@Component({ name: 'demo-block' })
export class DemoBlock extends Vue {
  @Prop(String) public title!: string;
  public render() {
    return (
      <vf-section title={this.title}>
        <vf-panel>{this.$slots.default}</vf-panel>
      </vf-section>
    );
  }
}
