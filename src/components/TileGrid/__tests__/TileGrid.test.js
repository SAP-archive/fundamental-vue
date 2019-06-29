import { mount, createLocalVue } from "@vue/test-utils";
import FundamentalVue from "./../../../index";

const createGrid = template => {
  const localVue = createLocalVue();
  localVue.use(FundamentalVue);
  return mount(
    {
      template
    },
    { localVue }
  );
};
describe("TileGrid", () => {
  it("renders correctly with col=2", () => {
    const wrapper = createGrid(`
      <fd-tile-grid :col="2">
        <fd-tile><fd-tile-content><fd-tile-title>Tile 1</fd-tile-title></fd-tile-content></fd-tile>
        <fd-tile><fd-tile-content><fd-tile-title>Tile 2</fd-tile-title></fd-tile-content></fd-tile>
        <fd-tile><fd-tile-content><fd-tile-title>Tile 3</fd-tile-title></fd-tile-content></fd-tile>
        <fd-tile><fd-tile-content><fd-tile-title>Tile 4</fd-tile-title></fd-tile-content></fd-tile>
        <fd-tile><fd-tile-content><fd-tile-title>Tile 5</fd-tile-title></fd-tile-content></fd-tile>
      </fd-tile-grid>
    `);
    expect(wrapper.element).toMatchSnapshot();
  });

  it("renders correctly with col=6", () => {
    const wrapper = createGrid(`
      <fd-tile-grid :col="2">
        <fd-tile><fd-tile-content><fd-tile-title>Tile 1</fd-tile-title></fd-tile-content></fd-tile>
        <fd-tile><fd-tile-content><fd-tile-title>Tile 2</fd-tile-title></fd-tile-content></fd-tile>
        <fd-tile><fd-tile-content><fd-tile-title>Tile 3</fd-tile-title></fd-tile-content></fd-tile>
        <fd-tile><fd-tile-content><fd-tile-title>Tile 4</fd-tile-title></fd-tile-content></fd-tile>
        <fd-tile><fd-tile-content><fd-tile-title>Tile 5</fd-tile-title></fd-tile-content></fd-tile>
      </fd-tile-grid>
    `);
    expect(wrapper.element).toMatchSnapshot();
  });
});
