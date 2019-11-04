import { createLocalVue, mount } from '@vue/test-utils'
import FundamentalVue from './../../../index'
import LayoutGrid from './../'

const createGrid = template => {
  const localVue = createLocalVue()
  localVue.use(FundamentalVue)
  return mount(
    {
      template
    },
    { localVue }
  )
}
describe('Layout Grid Component', () => {
  // This test may seem trivial but FdLayoutGrid had a bug that would have been caught by this test.
  it('adds correct class for col-prop', () => {
    const wrapper = mount(LayoutGrid, {
      propsData: {
        col: 2
      }
    })
    expect(wrapper.classes()).toContainEqual('fd-layout-grid--col-2')
  })
  // it("renders correctly with col=2", () => {
  //   const wrapper = createGrid(`
  //     <FdLayoutGrid :col="2">
  //       <fd-tile><fd-tile-content><fd-tile-title>Tile 1</fd-tile-title></fd-tile-content></fd-tile>
  //       <fd-tile><fd-tile-content><fd-tile-title>Tile 2</fd-tile-title></fd-tile-content></fd-tile>
  //       <fd-tile><fd-tile-content><fd-tile-title>Tile 3</fd-tile-title></fd-tile-content></fd-tile>
  //       <fd-tile><fd-tile-content><fd-tile-title>Tile 4</fd-tile-title></fd-tile-content></fd-tile>
  //       <fd-tile><fd-tile-content><fd-tile-title>Tile 5</fd-tile-title></fd-tile-content></fd-tile>
  //     </FdLayoutGrid>
  //   `);
  //   expect(wrapper.element).toMatchSnapshot();
  // });

  // it("renders correctly with col=6", () => {
  //   const wrapper = createGrid(`
  //     <FdLayoutGrid :col="2">
  //       <fd-tile><fd-tile-content><fd-tile-title>Tile 1</fd-tile-title></fd-tile-content></fd-tile>
  //       <fd-tile><fd-tile-content><fd-tile-title>Tile 2</fd-tile-title></fd-tile-content></fd-tile>
  //       <fd-tile><fd-tile-content><fd-tile-title>Tile 3</fd-tile-title></fd-tile-content></fd-tile>
  //       <fd-tile><fd-tile-content><fd-tile-title>Tile 4</fd-tile-title></fd-tile-content></fd-tile>
  //       <fd-tile><fd-tile-content><fd-tile-title>Tile 5</fd-tile-title></fd-tile-content></fd-tile>
  //     </FdLayoutGrid>
  //   `);
  //   expect(wrapper.element).toMatchSnapshot();
  // });
})
