import { assert } from 'chai';
import { createLocalVue, mount } from '@vue/test-utils';
import { RowSelectionIndicator, Table, TableRow, TableCell, TableHeader, TableHeaderCell } from '../';

describe('Table', () => {
  describe('TableCell', () => {
    // In the past table cell added empty class attributes to the rendered td-el.
    it('does not render class attribute', async () => {
      const localVue = createLocalVue();
      const ClassAttrWrapper = localVue.extend({
        name: 'ClassAttrWrapper',
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
            { id: '1', firstName: 'Chris', lastName: 'Kienle' },
            { id: '2', firstName: 'Andi', lastName: 'Kienle' },
            { id: '3', firstName: 'Sven', lastName: 'Bacia' },
            { id: '4', firstName: 'Artur', lastName: 'Raess' },
          ],
        }),
      });
      const wrapper = mount(ClassAttrWrapper, { localVue });
      await localVue.nextTick();

      const cells = wrapper.findAll('td');
      assert.isNotEmpty(cells);
      for(const cell of cells.wrappers) {
        const classAttr = cell.attributes('class');
        assert(classAttr === undefined || classAttr !== '');
      }
    });
  });
  it.only('reacts to column changes', async () => {
    const localVue = createLocalVue();
    const ChangeColumnWrapper = localVue.extend({
      name: 'ChangeColumnWrapper',
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
        headers: [{label: 'c1'}, {label: 'c2'}],
        items: [
          { firstName: 'Chris', lastName: 'Kienle' },
          { firstName: 'Andi', lastName: 'Kienle' },
          { firstName: 'Sven', lastName: 'Bacia' },
          { firstName: 'Artur', lastName: 'Raess' },
        ],
      }),
    });
    const wrapper = mount(ChangeColumnWrapper, { localVue });
    await localVue.nextTick();

    const headerCells = wrapper.findAll<TableHeaderCell>(TableHeaderCell);
    assert.lengthOf(headerCells, 2);

    // Now we change the columns
    wrapper.setData({
      items: [{ id: '1' }],
      headers: [{label: 'c1'}, {label: 'c2'}, {label: 'c3'}, {label: 'c4'}]});
    await localVue.nextTick();
    assert.lengthOf(wrapper.findAll<TableHeaderCell>(TableHeaderCell), 4);
  }),
  it('injects item id into table rows', async () => {
    const localVue = createLocalVue();
    const InjectIdTableTest = localVue.extend({
      name: 'InjectIdTableTest',
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
          { id: '1', firstName: 'Chris', lastName: 'Kienle' },
          { id: '2', firstName: 'Andi', lastName: 'Kienle' },
          { id: '3', firstName: 'Sven', lastName: 'Bacia' },
          { id: '4', firstName: 'Artur', lastName: 'Raess' },
        ],
      }),
    });
    const wrapper = mount(InjectIdTableTest);
    await localVue.nextTick();

    const rows = wrapper.findAll<TableRow>(TableRow);
    const ids = rows.wrappers.map(row => row.vm.itemId);
    assert.sameMembers(ids, ['1', '2', '3', '4'], `TableRows should have itemIds... html: ${wrapper.html()}`);
  });

  it('correctly disables checkboxes when switching from multiple selection to single selection with multiple rows selected', async () => {
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
        selectionMode: 'multiple',
        headers: ['id', 'firstName', 'lastName'],
        tableData: [
          { id: '1', firstName: 'Chris', lastName: 'Kienle' },
          { id: '2', firstName: 'Andi', lastName: 'Kienle' },
          { id: '3', firstName: 'Sven', lastName: 'Bacia' },
          { id: '4', firstName: 'Artur', lastName: 'Raess' },
        ],
      }),
    });
    const wrapper = mount(TestComponent);
    await localVue.nextTick();

    const rows = wrapper.findAll('tbody tr');
    rows.at(0).trigger('click');
    rows.at(1).trigger('click');

    await localVue.nextTick();
    const selectedRows = wrapper.findAll('tr[aria-selected="true"]');

    assert.lengthOf(selectedRows, 2, 'expected selected tr-elements');
    const checkboxes = wrapper.findAll<RowSelectionIndicator>(RowSelectionIndicator);
    const checkedCheckboxes = checkboxes.wrappers.filter(checkbox => checkbox.vm.selected === true);
    assert.lengthOf(checkedCheckboxes, 2, 'expected checked checkboxes');
    const selectedIdsEvents = wrapper.find<Table>(Table).emitted('update:selectedIds');
    assert.isNotEmpty(selectedIdsEvents, 'expected at least one update:selectedIds event');
    const selectedIds = selectedIdsEvents[selectedIdsEvents.length - 1][0];
    assert.sameMembers(selectedIds, ['1', '2']);
    wrapper.setData({ selectionMode: 'single' });
    wrapper.find(Table).setData({ selectionMode: 'single' });
    await localVue.nextTick();
    const checkedCheckboxesAfterChange = checkboxes.wrappers.filter(checkbox => checkbox.vm.selected === true);
    assert.lengthOf(checkedCheckboxesAfterChange, 1);
});

  it('correctly checks checkboxes when selecting rows', async () => {
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
        headers: ['firstName', 'lastName'],
        selectedIds: [],
        tableData: [
          { id: '1', firstName: 'Chris', lastName: 'Kienle' },
          { id: '2', firstName: 'Andi', lastName: 'Kienle' },
          { id: '3', firstName: 'Sven', lastName: 'Bacia' },
          { id: '4', firstName: 'Artur', lastName: 'Raess' },
        ],
      }),
    });
    const wrapper = mount(TestComponent);
    await localVue.nextTick();

    const rows = wrapper.findAll('tbody tr');
    rows.at(0).trigger('click');
    rows.at(1).trigger('click');

    const selectedRows = wrapper.findAll('tr[aria-selected="true"]');

    assert.lengthOf(selectedRows, 2);
    const checkboxes = wrapper.findAll<RowSelectionIndicator>(RowSelectionIndicator);
    const checkedCheckboxes = checkboxes.wrappers.filter(checkbox => checkbox.vm.selected === true);
    assert.lengthOf(checkedCheckboxes, 2);
    const selectedIds = wrapper.vm.selectedIds;
    assert.lengthOf(selectedIds, 2);
    assert.sameMembers(selectedIds, ['1', '2']);
  });

  it('ensures single selection', async () => {
    const data = [
      { id: '1', firstName: 'Chris', lastName: 'Kienle', building: 'WFD02' },
      { id: '2', firstName: 'Andi', lastName: 'Kienle', building: 'WFD03' },
      { id: '3', firstName: 'Sven', lastName: 'Bacia', building: 'WFD02' },
      { id: '4', firstName: 'Artur', lastName: 'Raess', building: 'WFD02' },
    ];
    const localVue = createLocalVue();
    const wrapper = mount({
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
        headers: ['firstName', 'lastName', 'building'],
        tableData: [...data],
      }),
    }, { localVue });
    await localVue.nextTick();

    const rows = wrapper.findAll('tbody tr');
    rows.at(0).trigger('click');
    const selectedRows = () => {
      return wrapper.findAll('tr[aria-selected="true"]');
    };
    assert.lengthOf(selectedRows(), 1);
    rows.at(1).trigger('click');
    assert.lengthOf(selectedRows(), 1);
  });

  it('can select multiple rows', async () => {
    const data = [
      { id: '1', firstName: 'Chris', lastName: 'Kienle', building: 'WFD02' },
      { id: '2', firstName: 'Andi', lastName: 'Kienle', building: 'WFD03' },
      { id: '3', firstName: 'Sven', lastName: 'Bacia', building: 'WFD02' },
      { id: '4', firstName: 'Artur', lastName: 'Raess', building: 'WFD02' },
    ];
    const localVue = createLocalVue();
    const wrapper = mount({
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
      data: () => ({ tableData: [...data] }),
    }, { localVue });
    await localVue.nextTick();

    const rows = wrapper.findAll('tbody tr');
    rows.at(0).trigger('click');
    rows.at(1).trigger('click');

    await localVue.nextTick();
    const selectedRows = () => {
      return wrapper.findAll('tr[aria-selected="true"]');
    };
    assert.lengthOf(selectedRows(), 2);
  });

  it('renders rows and columns when given data', async () => {
    const data = [
      { id: '1', firstName: 'Chris', lastName: 'Kienle', building: 'WFD02' },
      { id: '2', firstName: 'Andi', lastName: 'Kienle', building: 'WFD03' },
      { id: '3', firstName: 'Sven', lastName: 'Bacia', building: 'WFD02' },
      { id: '4', firstName: 'Artur', lastName: 'Raess', building: 'WFD02' },
    ];
    const localVue = createLocalVue();
    const wrapper = mount({
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
      data: () => ({ tableData: [...data] }),
    }, { localVue });
    await localVue.nextTick();
    const rows = wrapper.findAll('tbody tr');
    const cols = wrapper.findAll('tbody td');
    assert.lengthOf(rows, data.length);
    assert.lengthOf(cols, 3 * data.length);
  });

  it('renders no rows when data is empty', async () => {
    const localVue = createLocalVue();
    const wrapper = mount({
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
      `,
    }, { localVue });
    await localVue.nextTick();
    const rows = wrapper.findAll('tbody tr');
    const cols = wrapper.findAll('tbody td');
    assert.lengthOf(cols, 0);
    assert.lengthOf(rows, 0);
  });
});
