import { Component, Prop } from 'vue-property-decorator';
import { componentName } from '@/util';
import TsxComponent from '@/vue-tsx';

interface Props {
  title?: string | null;
}

@Component({ name: componentName('Section') })
export class Section extends TsxComponent<Props> {
  @Prop({ type: String, default: null, required: false })
  public title!: string | null;

  public render() {
    const body = this.$slots.default;
    const titleSlot = this.$slots.title;
    const title = this.title;

    const renderHeaderWithTitle = () => {
      const hasTitle = title != null;
      const hasTitleSlot = !!titleSlot;
      if (!hasTitle && !hasTitleSlot) {
        return null;
      }
      return (
        <div class='fd-section__header'>
          {titleSlot}
          {hasTitle && <h1 class='fd-section__title'>{title}</h1>}
        </div>
      );
    };

    return (
      <section class={this.classes}>
        {renderHeaderWithTitle()}
        {body}
      </section>
    );
  }

  private get classes() { return ['fd-section']; }
}
