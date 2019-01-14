import { Component, Event, DefaultSlot, Prop, Base } from '@/core';

export interface Props {
  itemsPerPage?: number;
  itemsTotal: number;
  initialPage?: number;
  displayTotal: boolean;
  totalText: string;
}

@Component('Pagination')
@Event('click', 'Sent when button is clicked')
@DefaultSlot('pagination content (usually just total number of items and page numbers)')
export class Pagination extends Base<Props> {
  @Prop('items per page', { type: Number, default: 10 })
  public itemsPerPage!: number;

  @Prop('total number of items', { type: Number, required: true })
  public itemsTotal!: number;

  @Prop('initial page', { type: Number, default: 1 })
  public initialPage!: number;

  @Prop('whether to dispaly total', { type: Boolean, default: true })
  public displayTotal!: boolean;

  @Prop('total text', { type: String, default: '' })
  public totalText!: string;

  private numberOfPages = Math.ceil(
    this.itemsTotal / (this.itemsPerPage ? this.itemsPerPage : 10),
  );

  private selectedPage: number = this.initialPage ? this.initialPage : 1;
  // when selectedPage = 27, render like [1,...26,27,28,...100]
  private numberOfNeighbour: number = 1;

  private createPaginationLinks(numberOfPages: number) {
    // create an array with number of pages and fill it with links
    let aPages: any[] = [];
    // flag to mark if ... need to be generated
    let notSuppressed = true;
    aPages = Array(numberOfPages)
    .fill(0)
    .reduce((links, link, index) => {
      if (index === 0 || index === this.numberOfPages - 1 || (index >= this.selectedPage - this.numberOfNeighbour -1 && index <= this.selectedPage + this.numberOfNeighbour -1)) {
        links.push(
          <a
            key={index}
            href='#'
            class='fd-pagination__link'
            aria-selected={this.selectedPage === index + 1}
            onClick={(event: Event) => this.pageClicked(event)}
          >
            {index + 1}
          </a>,
        );
        notSuppressed = true;
      } else if (notSuppressed === true) {
        links.push(
          <span
            class='fd-pagination__link fd-pagination__link--more'
            aria-hidden='true'
            aria-label='...'
            role='presentation'
          />,
        );
        notSuppressed = false;
      }
      return links;
    }, []);
    return aPages;
  }

  private pageClicked(event: Event) {
    const element = event.target as HTMLAnchorElement;
    this.selectedPage = element && +element.text || 1;
    this.$emit('update:initialPage', this.selectedPage);
  }

  private navigateToFirst() {
    this.selectedPage = 1;
    this.$emit('update:initialPage', this.selectedPage);
  }

  private navigateToLast() {
    this.selectedPage = this.numberOfPages;
    this.$emit('update:initialPage', this.selectedPage);
  }

  private navigateForward() {
    if (this.selectedPage === this.numberOfPages) {
      return;
    }
    ++this.selectedPage;
    this.$emit('update:initialPage', this.selectedPage);
  }

  private navigateBack() {
    if (this.selectedPage === 1) {
      return;
    }
    --this.selectedPage;
    this.$emit('update:initialPage', this.selectedPage);
  }

  private keyHandler(e: KeyboardEvent) {
    const key = e.code;
    if (key === 'Home') {
      this.navigateToFirst();
    } else if (key === 'End') {
      this.navigateToLast();
    } else if (key === 'ArrowLeft' || key === 'ArrowUp' || key === 'PageUp') {
      this.navigateBack();
    } else if (key === 'ArrowRight' || key === 'ArrowDown' || key === 'PageDown') {
      this.navigateForward();
    }
  }

  public render() {
    return (
      <div class='fd-pagination' on-keydown={this.keyHandler}>
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
