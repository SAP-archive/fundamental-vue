import { UIComponentConfig } from './types/UIComponentConfig';
import { ButtonGroup, Token, Image, Tabs, TabItem, Toggle, Spinner, Breadcrumb, BreadcrumbItem, Alert, Icon, SideNav, SideNavItem, SideNavList, ActionBar, Button, FormSet, FormGroup, FormItem, FormLabel, FormMessage, FieldSet, Input, Legend, TextArea, Select, Menu, MenuList, MenuItem, Panel, PanelGrid, Section, InputGroup, Combobox, ComboboxItem, Table, TableColumn, Badge, Link, Modal, Identifier, PopoverContent, ListGroup, InlineHelp } from '@/components';

// Used to build the side nav on the main docs page.
// The exported array will be further prepared (sorted, slugifies, ...) by someone else.
// So all we have to do here is to declare everything that should appear in the menu.
export const UIComponentsConfig: UIComponentConfig[] = [
  {
    id: 'Section',
    title: 'Section',
    examples: [
      { id: 'structure', title: 'Section Structure' },
      { id: 'grid', title: 'Section with Panel Grid' },
      { id: 'panels', title: 'Section with Panels' },
      { id: 'header', title: 'Section with Header' },
    ],
    relatedComponents: [Section, Panel, PanelGrid],
  },
  {
    id: 'ListGroup',
    title: 'List Group',
    examples: [
      { id: 'simple', title: 'Simple List' },
      { id: 'action', title: 'List with Action' },
      { id: 'checkboxes', title: 'List with Checkboxes' },
    ],
    relatedComponents: [ListGroup],
  },
  {
    id: 'Tabs',
    title: 'Tabs',
    examples: [
      { id: 'Example', title: 'Default Tabs' },
    ],
    relatedComponents: [Tabs, TabItem],
  },
  {
    id: 'Token',
    title: 'Token',
    examples: [
      { id: 'Example', title: 'Default Token' },
    ],
    relatedComponents: [Token],
  },
  {
    id: 'Image',
    title: 'Image',
    examples: [
      { id: 'Example', title: 'Size and Shape' },
    ],
    relatedComponents: [Image],
  },
  {
    id: 'Identifier',
    title: 'Identifier',
    examples: [
      { id: 'Example', title: 'Identifiers' },
      { id: 'accent', title: 'Accent Colors' },
    ],
    relatedComponents: [Identifier],
  },
  {
    id: 'Toggle',
    title: 'Toggle',
    examples: [
      {
        id: 'Example', title: 'Toggle',
      },
    ],
    relatedComponents: [Toggle],
  },
  {
    id: 'Modal',
    title: 'Modal',
    examples: [
      { id: 'Example', title: 'Information Modal' },
    ],
    relatedComponents: [Modal],
  },
  {
    id: 'Spinner',
    title: 'Spinner',
    examples: [
      { id: 'Example', title: 'Loader element' },
    ],
    relatedComponents: [Spinner],
  },
  {
    id: 'Breadcrumb',
    title: 'Breadcrumb',
    examples: [
      { id: 'default', title: 'Breadcrumb' },
    ],
    relatedComponents: [Breadcrumb, BreadcrumbItem],
  },
  {
    id: 'Form',
    title: 'Form',
    examples: [
      { id: 'binding', title: 'Bindings', hasDescription: true },
      { id: 'inputs', title: 'Inputs', hasDescription: true },
      { id: 'states', title: 'States' },
      { id: 'select', title: 'Select' },
      { id: 'radio', title: 'Radio Buttons' },
      { id: 'checkbox', title: 'Checkboxes' },
    ],
    relatedComponents: [FormSet, FormGroup, FormItem, FormLabel, FormMessage, FieldSet, Input, InputGroup, Legend, TextArea, Select],
  },
  {
    id: 'Alert',
    title: 'Alert',
    examples: [
      { id: 'default', title: 'Default Alert' },
      { id: 'warning', title: 'Warning Alert' },
      { id: 'error', title: 'Error Alert' },
    ],
    relatedComponents: [Alert],
  },
  {
    id: 'Icon',
    title: 'Icon',
    examples: [
      { id: 'icon', title: 'Icon usage and size options' },
    ],
    relatedComponents: [Icon],
  },
  {
    id: 'SideNav',
    title: 'Side Navigation',
    examples: [
      { id: 'simple', title: 'Side Navigation with one level' },
      { id: 'group', title: 'Grouped Side Navigation' },
      { id: 'submenu', title: 'Nested' },
    ],
    relatedComponents: [SideNav, SideNavList, SideNavItem],
  },
  {
    id: 'ActionBar',
    title: 'Action Bar',
    examples: [
      { id: 'full', title: 'Action bar with back button, description and action buttons.' },
    ],
    relatedComponents: [ActionBar],
  },
  {
    id: 'Menu',
    title: 'Menu',
    examples: [
      { id: 'menu', title: 'Menu' },
      { id: 'menu-group', title: 'Menu w/ Group' },
      { id: 'menu-addon', title: 'Menu w/ addon before' },
    ],
    relatedComponents: [Menu, MenuList, MenuItem],
  },
  {
    id: 'Popover',
    title: 'Popover',
    examples: [
      { id: 'default', title: 'Popover' },
    ],
    relatedComponents: [PopoverContent],
  },
  {
    id: 'Button',
    title: 'Button',
    examples: [
      { id: 'types', title: 'Button Styling' },
      { id: 'icons', title: 'Button with Icon' },
      { id: 'sizes', title: 'Button Sizes' },
      { id: 'states', title: 'Button States' },
      { id: 'group', title: 'Button Groups' },
    ],
    relatedComponents: [Button, ButtonGroup],
  },
  {
    id: 'Colors',
    title: 'Color',
    examples: [
      { id: 'all', title: 'Colors' },
    ],
    relatedComponents: [],
  },
  {
    id: 'Panel',
    title: 'Panel',
    examples: [
      { id: 'structure', title: 'Panel Structure' },
      { id: 'default-grid', title: 'Default Panel Grid (3 columns)' },
      { id: 'nogap', title: 'Panel Grid with nogap' },
      { id: '2-cols', title: 'Panel Grid (2 columns)' },
      { id: '4-cols', title: 'Panel Grid (4 columns)' },
      { id: '5-cols', title: 'Panel Grid (5 columns)' },
      { id: '6-cols', title: 'Panel Grid (6 columns)' },
      { id: 'span', title: 'Panel Grid with column span' },
    ],
    relatedComponents: [Panel, PanelGrid],
  },
  {
    id: 'InputGroup',
    title: 'Input Group',
    examples: [
      { id: 'text-addon', title: 'Text add-on' },
      { id: 'slot-addon', title: 'Slot add-on' },
    ],
    relatedComponents: [InputGroup, Input],
  },
  {
    id: 'Combobox',
    title: 'Combobox',
    examples: [
      { id: 'default', title: 'Default Combobox' },
    ],
    relatedComponents: [Combobox, ComboboxItem, MenuItem],
  },
  {
    id: 'Table',
    title: 'Table',
    examples: [
      { id: 'default', title: 'Default Table' },
      { id: 'fixed-col', title: 'Table with Fix Column' },
      { id: 'complex', title: 'Complex Table' },
    ],
    relatedComponents: [Table, TableColumn],
  },
  {
    id: 'Badge',
    title: 'Badge',
    examples: [
      { id: 'default', title: 'Default Badge' },
    ],
    relatedComponents: [Badge],
  },
  {
    id: 'Link',
    title: 'Link',
    examples: [
      { id: 'default', title: 'Link' },
    ],
    relatedComponents: [Link],
  },
  {
    id: 'InlineHelp',
    title: 'Inline Help',
    examples: [
      { id: 'default', title: 'Inline Help' },
    ],
    relatedComponents: [InlineHelp],
  },
];
