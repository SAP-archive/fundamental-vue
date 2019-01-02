import { Component, Prop, Base } from '@/core';

interface Props {
  ariaLabel?: string;
}

@Component('Spinner')
export class Spinner extends Base<Props> {
  @Prop('ARIA label', { type: String, default: 'Loading' })
  public ariaLabel!: string;

  public render() {
    return (
      <div class='fd-spinner' aria-hidden='false' aria-label={this.ariaLabel}>
        <div />
      </div>
    );
  }
}
