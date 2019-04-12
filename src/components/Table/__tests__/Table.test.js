import { createLocalVue, mount } from "@vue/test-utils";
import {
  TableRow,
  TableCell,
  TableHeader,
  TableHeaderCell
} from "./../Components";
import RowSelectionIndicator from "./../Components/RowSelectionIndicator.vue";
import Table from "./../Table.vue";

describe("Table", () => {
  describe("TableCell", () => {
    // In the past table cell added empty class attributes to the rendered td-el.
    it("does not render class attribute", async () => {
      const localVue = createLocalVue();
      const ClassAttrWrapper = localVue.extend({
        name: "ClassAttrWrapper",
        components: { Table, TableRow, TableCell },
        template: `
        <Table :items="items">
          <template slot="row" slot-scope="{item}">
            <TableRow>
              <TableCell>{{item.id}}</TableCell>
            </TableRow>
          </template>
        </Table>
        `,
        data: () => ({
          items: [
            { id: "1", firstName: "Chris", lastName: "Kienle" },
            { id: "2", firstName: "Andi", lastName: "Kienle" },
            { id: "3", firstName: "Sven", lastName: "Bacia" },
            { id: "4", firstName: "Artur", lastName: "Raess" }
          ]
        })
      });
      const wrapper = mount(ClassAttrWrapper, { localVue });
      await localVue.nextTick();

      const cells = wrapper.findAll("td").wrappers;
      expect(cells.length).toBe(4);
      for (const cell of cells) {
        const classAttr = cell.attributes("class");
        expect(classAttr == null || classAttr !== "").toBe(true);
      }
    });
  });
  it("reacts to column changes", async () => {
    const localVue = createLocalVue();
    const ChangeColumnWrapper = localVue.extend({
      name: "ChangeColumnWrapper",
      components: { Table, TableRow, TableCell, TableHeader, TableHeaderCell },
      template: `
      <Table :headers="headers" :items="items">
        <template slot='row' slot-scope='item'>
          <TableRow>
            <TableCell
              v-for="header in headers"
              :key="item.id + header.label"
            >
              {{header.label}}
            </TableCell>
          </TableRow>
        </template>
      </Table>
      `,
      data: () => ({
        headers: [{ label: "c1" }, { label: "c2" }],
        items: [
          { firstName: "Chris", lastName: "Kienle" },
          { firstName: "Andi", lastName: "Kienle" },
          { firstName: "Sven", lastName: "Bacia" },
          { firstName: "Artur", lastName: "Raess" }
        ]
      })
    });
    const wrapper = mount(ChangeColumnWrapper, { localVue });
    await localVue.nextTick();

    const headerCells = wrapper.findAll(TableHeaderCell);
    expect(headerCells).toHaveLength(2);
    // Now we change the columns
    wrapper.setData({
      items: [{ id: "1" }],
      headers: [
        { label: "c1" },
        { label: "c2" },
        { label: "c3" },
        { label: "c4" }
      ]
    });
    await localVue.nextTick();
    expect(wrapper.findAll(TableHeaderCell)).toHaveLength(4);
  }),
    it("injects item id into table rows", async () => {
      const localVue = createLocalVue();
      const InjectIdTableTest = localVue.extend({
        name: "InjectIdTableTest",
        components: { Table, TableRow, TableCell },
        template: `
      <Table :columns="columns" :items="items">
        <template slot="row" slot-scope="{item}">
          <TableRow>
            <TableCell>{{item.id}}</TableCell>
          </TableRow>
        </template>
      </Table>
      `,
        data: () => ({
          columns: [],
          items: [
            { id: "1", firstName: "Chris", lastName: "Kienle" },
            { id: "2", firstName: "Andi", lastName: "Kienle" },
            { id: "3", firstName: "Sven", lastName: "Bacia" },
            { id: "4", firstName: "Artur", lastName: "Raess" }
          ]
        })
      });
      const wrapper = mount(InjectIdTableTest);
      await localVue.nextTick();

      const rows = wrapper.findAll(TableRow);
      const ids = rows.wrappers.map(row => row.vm.itemId);
      expect(new Set(ids)).toEqual(new Set(["1", "2", "3", "4"]));
    });

  it("correctly disables checkboxes when switching from multiple selection to single selection with multiple rows selected", async () => {
    const localVue = createLocalVue();
    const TestComponent = localVue.extend({
      components: { RowSelectionIndicator, Table, TableRow, TableCell },
      template: `
      <Table
        :headers="headers"
        :selectionMode="selectionMode"
        :items="tableData"
      >
        <template slot="row" slot-scope="{selected, changeSelection, item}">
          <TableRow>
            <TableCell>
              <RowSelectionIndicator
                :value="item.id"
                :selected="selected"
                @change="changeSelection"
              />
            </TableCell>
            <TableCell>{{item.firstName}}</TableCell>
            <TableCell>{{item.lastName}}</TableCell>
          </TableRow>
        </template>
      </Table>
      `,
      data: () => ({
        selectionMode: "multiple",
        headers: ["id", "firstName", "lastName"],
        tableData: [
          { id: "1", firstName: "Chris", lastName: "Kienle" },
          { id: "2", firstName: "Andi", lastName: "Kienle" },
          { id: "3", firstName: "Sven", lastName: "Bacia" },
          { id: "4", firstName: "Artur", lastName: "Raess" }
        ]
      })
    });
    const wrapper = mount(TestComponent);
    await localVue.nextTick();

    const rows = wrapper.findAll("tbody tr");
    rows.at(0).trigger("click");
    rows.at(1).trigger("click");

    await localVue.nextTick();
    const selectedRows = wrapper.findAll('tr[aria-selected="true"]');

    expect(selectedRows).toHaveLength(2);
    const checkboxes = wrapper.findAll(RowSelectionIndicator);
    const checkedCheckboxes = checkboxes.wrappers.filter(
      checkbox => checkbox.vm.selected === true
    );
    expect(checkedCheckboxes).toHaveLength(2);
    const selectedIdsEvents = wrapper.find(Table).emitted("update:selectedIds");
    expect(selectedIdsEvents.length).toBeGreaterThan(0);
    const selectedIds = selectedIdsEvents[selectedIdsEvents.length - 1][0];
    expect(new Set(selectedIds)).toEqual(new Set(["1", "2"]));
    wrapper.setData({ selectionMode: "single" });
    wrapper.find(Table).setData({ selectionMode: "single" });
    await localVue.nextTick();
    const checkedCheckboxesAfterChange = checkboxes.wrappers.filter(
      checkbox => checkbox.vm.selected === true
    );
    expect(checkedCheckboxesAfterChange).toHaveLength(1);
  });

  it("correctly checks checkboxes when selecting rows", async () => {
    const localVue = createLocalVue();
    const TestComponent = localVue.extend({
      components: { RowSelectionIndicator, Table, TableRow, TableCell },
      template: `
      <Table :headers="headers" :selectedIds.sync="selectedIds" selectionMode="multiple" :items="tableData">
      <template slot="row" slot-scope="{item, changeSelection, selected}">
        <TableRow>
          <TableCell>
            <RowSelectionIndicator
              :value="item.id"
              :selected="selected"
              @change="changeSelection"
            />
            </TableCell>
            <TableCell>{{item.firstName}}</TableCell>
            <TableCell>{{item.lastName}}</TableCell>
          </TableRow>
        </template>
      </Table>
      `,
      data: () => ({
        headers: ["firstName", "lastName"],
        selectedIds: [],
        tableData: [
          { id: "1", firstName: "Chris", lastName: "Kienle" },
          { id: "2", firstName: "Andi", lastName: "Kienle" },
          { id: "3", firstName: "Sven", lastName: "Bacia" },
          { id: "4", firstName: "Artur", lastName: "Raess" }
        ]
      })
    });
    const wrapper = mount(TestComponent, { localVue });
    await localVue.nextTick();

    const rows = wrapper.findAll("tbody tr");
    rows.at(0).trigger("click");
    rows.at(1).trigger("click");
    await localVue.nextTick();
    const selectedRows = wrapper.findAll('tr[aria-selected="true"]');
    expect(selectedRows).toHaveLength(2);
    const checkboxes = wrapper.findAll(RowSelectionIndicator);
    const isChecked = indicator => indicator.element.checked === true;
    const checkedCheckboxes = checkboxes.wrappers.filter(isChecked);
    expect(checkedCheckboxes).toHaveLength(2);

    const selectedIds = wrapper.vm.selectedIds;
    expect(selectedIds).toHaveLength(2);
    expect(new Set(selectedIds)).toEqual(new Set(["1", "2"]));
  });

  it("ensures single selection", async () => {
    const data = [
      { id: "1", firstName: "Chris", lastName: "Kienle", building: "WFD02" },
      { id: "2", firstName: "Andi", lastName: "Kienle", building: "WFD03" },
      { id: "3", firstName: "Sven", lastName: "Bacia", building: "WFD02" },
      { id: "4", firstName: "Artur", lastName: "Raess", building: "WFD02" }
    ];
    const localVue = createLocalVue();
    const wrapper = mount(
      {
        components: { Table, TableRow, TableCell },
        template: `
      <Table :headers="headers" selectionMode="single" :items="tableData">
        <template slot="row" slot-scope="{item}">
          <TableRow>
            <TableCell>{{item.firstName}}</TableCell>
            <TableCell>{{item.lastName}}</TableCell>
            <TableCell>{{item.building}}</TableCell>
          </TableRow>
        </template>
      </Table>
      `,
        data: () => ({
          headers: ["firstName", "lastName", "building"],
          tableData: [...data]
        })
      },
      { localVue }
    );
    await localVue.nextTick();

    const rows = wrapper.findAll("tbody tr");
    rows.at(0).trigger("click");
    const selectedRows = () => {
      return wrapper.findAll('tr[aria-selected="true"]');
    };
    expect(selectedRows()).toHaveLength(1);
    rows.at(1).trigger("click");
    expect(selectedRows()).toHaveLength(1);
  });

  it("can select multiple rows", async () => {
    const data = [
      { id: "1", firstName: "Chris", lastName: "Kienle", building: "WFD02" },
      { id: "2", firstName: "Andi", lastName: "Kienle", building: "WFD03" },
      { id: "3", firstName: "Sven", lastName: "Bacia", building: "WFD02" },
      { id: "4", firstName: "Artur", lastName: "Raess", building: "WFD02" }
    ];
    const localVue = createLocalVue();
    const wrapper = mount(
      {
        components: { Table, TableRow, TableCell },
        template: `
      <Table selectionMode="multiple" :items="tableData">
        <template slot="row" slot-scope="{item}">
          <TableRow>
            <TableCell>{{item.firstName}}</TableCell>
            <TableCell>{{item.lastName}}</TableCell>
            <TableCell>{{item.building}}</TableCell>
          </TableRow>
        </template>
      </Table>
      `,
        data: () => ({ tableData: [...data] })
      },
      { localVue }
    );
    await localVue.nextTick();

    const rows = wrapper.findAll("tbody tr");
    rows.at(0).trigger("click");
    rows.at(1).trigger("click");

    await localVue.nextTick();
    const selectedRows = () => {
      return wrapper.findAll('tr[aria-selected="true"]');
    };
    expect(selectedRows()).toHaveLength(2);
  });

  it("renders rows and columns when given data", async () => {
    const data = [
      { id: "1", firstName: "Chris", lastName: "Kienle", building: "WFD02" },
      { id: "2", firstName: "Andi", lastName: "Kienle", building: "WFD03" },
      { id: "3", firstName: "Sven", lastName: "Bacia", building: "WFD02" },
      { id: "4", firstName: "Artur", lastName: "Raess", building: "WFD02" }
    ];
    const localVue = createLocalVue();
    const wrapper = mount(
      {
        components: { Table, TableRow, TableCell },
        template: `
      <Table :items="tableData">
        <template slot="row" slot-scope="{item}">
          <TableRow>
            <TableCell>{{item.firstName}}</TableCell>
            <TableCell>{{item.lastName}}</TableCell>
            <TableCell>{{item.building}}</TableCell>
          </TableRow>
        </template>
      </Table>
      `,
        data: () => ({ tableData: [...data] })
      },
      { localVue }
    );
    await localVue.nextTick();
    const rows = wrapper.findAll("tbody tr");
    const cols = wrapper.findAll("tbody td");
    expect(rows).toHaveLength(data.length);
    expect(cols).toHaveLength(3 * data.length);
  });

  it("renders no rows when data is empty", async () => {
    const localVue = createLocalVue();
    const wrapper = mount(
      {
        components: { Table, TableRow, TableCell },
        data: () => ({ tableData: [] }),
        template: `
      <Table :items="tableData">
        <template slot="row" slot-scope="{item}">
          <TableRow>
            <TableCell>{{item.firstName}}</TableCell>
            <TableCell>{{item.lastName}}</TableCell>
            <TableCell>{{item.building}}</TableCell>
          </TableRow>
        </template>
      </Table>
      `
      },
      { localVue }
    );
    await localVue.nextTick();
    const rows = wrapper.findAll("tbody tr");
    const cols = wrapper.findAll("tbody td");
    expect(cols).toHaveLength(0);
    expect(rows).toHaveLength(0);
  });
});
