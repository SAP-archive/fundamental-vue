import 'highlight.js/styles/docco.css';
import { Component, Vue, Prop } from 'vue-property-decorator';
import { highlight } from '../directives/highlight';
import './CodeView.css';

@Component({
  name: 'code-view',
  directives: {
    highlight,
  },
})
export class CodeView extends Vue {
  @Prop({ type: String, required: false, default: 'rgb(250, 250, 250)' })
  public backgroundColor!: string;

  @Prop({ type: String, required: false, default: '' })
  public sourcecode!: string;

  public render() {
    const { backgroundColor } = this;
    const style = {
      'padding': 0,
      'margin': 0,
      'width': '100%',
      'background-color': backgroundColor + ' !important',
    };
    return (
      <pre style={style} v-highlight={true}>
        <code style={style} class='lang-js'>{this.sourcecode}</code>
      </pre>
    );
  }
}
