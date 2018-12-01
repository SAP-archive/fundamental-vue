import {
  Component,
  Vue,
  Prop,
} from 'vue-property-decorator';
import { ComponentReference } from './ComponentReference';
import { ComponentExample } from './ComponentExample';
import './StaticContent.sass';
import 'highlight.js/styles/docco.css';

@Component({
  name: 'StaticContent',
  components: {
    ComponentExample,
    ComponentReference,
  },
})
export class StaticContent extends Vue {
  @Prop({ type: String, default: null })
  public html!: string | null;

  public render() {
    const html = this.html;
    return (
      <div class='rendered-markdown' style='padding: 50px;'>
        {html && <div style='font-size: 1.2em; margin-bottom: 12px;' domPropsInnerHTML={html} />}
      </div>
    );
  }
}
