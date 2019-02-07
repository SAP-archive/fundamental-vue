import { assert, expect } from 'chai';
import { mount } from '@vue/test-utils';
import Pagination from '../Pagination.vue';

describe('Pagination', () => {
  const propsData = {
    itemsTotal: 101,
    initialPage: 1,
    totalText: 'Dalmations',
    displayTotal: true,
  };
  const pagination = mount(Pagination, { propsData });
  const vm: any = pagination.vm;
  const links = pagination.findAll('a');
  const leftArrow = links.at(0);
  const rightArrow = links.at(4);
  const pageOne = links.at(1);
  const lastPage = links.at(3);

  it('have total 5 hyperlinks rendered', () => {
    // 4 pages [1,2,11] + 2 arrows
    assert.lengthOf(links, 5);
  });

  it('the initial state', () => {
    assert.equal(vm.itemsTotal, 101);
    assert.equal(vm.initialPage, 1);
    assert.equal(vm.totalText, 'Dalmations');
    assert.equal(vm.displayTotal, true);
    // the default
    assert.equal(vm.itemsPerPage, 10);
  });

  it('the left arrow is disabled when initialPage is 1, while the right arrow is enabled', () => {
    expect(leftArrow.attributes('aria-disabled')).to.equal('true');
    assert.isUndefined(rightArrow.attributes('aria-disabled'));
  });

  it('toggle between page 1 and 2 using arrows', () => {
    // pageOne is at index 1 because there is left arrow at index 0
    const pageTwo = links.at(2);
    expect(pageOne.attributes('aria-selected')).to.equal('true');
    assert.isUndefined(pageTwo.attributes('aria-selected'));
    rightArrow.trigger('click');
    assert.isUndefined(pageOne.attributes('aria-selected'));
    expect(pageTwo.attributes('aria-selected')).to.equal('true');
    leftArrow.trigger('click');
    expect(pageOne.attributes('aria-selected')).to.equal('true');
    assert.isUndefined(pageTwo.attributes('aria-selected'));
  });

  it('move to last page by clicking on it and right arrow is disabled', () => {
    assert.isUndefined(lastPage.attributes('aria-selected'));
    lastPage.trigger('click');
    expect(lastPage.attributes('aria-selected')).to.equal('true');
    expect(rightArrow.attributes('aria-disabled')).to.equal('true');
  });

  it('click right arrow twice and ... appears at the correct place', () => {
    // reset to pageOne
    pageOne.trigger('click');
    rightArrow.trigger('click');
    rightArrow.trigger('click');
    const newLinks = pagination.findAll('a');
    // [1,2,3,4,...,11] + 2 arrows
    assert.lengthOf(newLinks, 7);
  });

});
