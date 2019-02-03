import { Component, Prop, Base } from '@/core';

interface Props {
  title?: string | null;
}

@Component('Section')

export class Section extends Base<Props> {
  @Prop({ type: String, default: null })
  title!: string | null;

  render() {
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
