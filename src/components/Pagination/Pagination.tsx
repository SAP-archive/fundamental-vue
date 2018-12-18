import {
  Component,
  Prop,
} from 'vue-property-decorator';
import { componentName } from '@/util';
import { Api } from '@/api';
import TsxComponent from '@/vue-tsx';

export interface Props {
  itemsPerPage?: number;
  itemsTotal: number;
  initialPage?: number;
  displayTotal: boolean;
  totalText: string;
}

@Component({ name: componentName('Pagination') })
@Api.Component('Pagination')
@Api.Event('click', 'Sent when button is clicked')
@Api.defaultSlot('pagination content (usually just total number of items and page numbers)')
export class Pagination extends TsxComponent<Props> {
  @Api.Prop('items per page', prop => prop.type(Number))
  @Prop({ type: Number, required: false, default: 10 })
  public itemsPerPage!: number;

  @Api.Prop('total number of items', prop => prop.type(Number))
  @Prop({ type: Number, required: true })
  public itemsTotal!: number;

  @Api.Prop('initial page', prop => prop.type(Number))
  @Prop({ type: Number, required: false, default: 1 })
  public initialPage!: number;

  @Api.Prop('whether to dispaly total', prop => prop.type(Boolean))
  @Prop({ type: Boolean, required: false, default: true })
  public displayTotal!: boolean;

  @Api.Prop('total text', prop => prop.type(String))
  @Prop({ type: String, required: false, default: '' })
  public totalText!: string;

  private numberOfPages = Math.ceil(
    this.itemsTotal / (this.itemsPerPage ? this.itemsPerPage : 10),
  );

  private selectedPage: number = this.initialPage ? this.initialPage : 1;

  private createPaginationLinks(numberOfPages: number) {
    // create an array with number of pages and fill it with links
    const aPages = Array(numberOfPages)
      .fill(0)
      .map((link, index) => (
        <a
          key={index}
          href='#'
          class='fd-pagination__link'
          aria-selected={this.selectedPage === index + 1}
          onClick={(event: Event) => this.pageClicked(event)}
        >
          {index + 1}
        </a>
      ));
    return aPages;
  }

  private pageClicked(event: Event) {
    const element = event.target as HTMLAnchorElement;
    this.selectedPage = element && +element.text || 1;
    this.$emit('page-change', this.selectedPage);
  }

  private navigateForward() {
    if (this.selectedPage === this.numberOfPages) {
      return;
    }
    ++this.selectedPage;
    this.$emit('page-change', this.selectedPage);
  }

  private navigateBack() {
    if (this.selectedPage === 1) {
      return;
    }
    --this.selectedPage;
    this.$emit('page-change', this.selectedPage);
  }

  public render() {
    return (
      <div class='fd-pagination'>
      {this.displayTotal ? (
        <span class='fd-pagination__total'>
          {this.itemsTotal} {this.totalText || 'items'}
        </span>
      ) : (
        ''
      )}
        <nav class='fd-pagination__nav'>
          <a
            href='#'
            class='fd-pagination__link fd-pagination__link--previous'
            aria-label='Previous'
            aria-disabled={this.selectedPage === 1}
            on-click={this.navigateBack}
          />
          {this.createPaginationLinks(this.numberOfPages)}
          <a
            href='#'
            class='fd-pagination__link fd-pagination__link--next'
            aria-label='Next'
            aria-disabled={this.selectedPage === this.numberOfPages}
            onClick={this.navigateForward}
          />
        </nav>
      </div>
    );
  }
}
