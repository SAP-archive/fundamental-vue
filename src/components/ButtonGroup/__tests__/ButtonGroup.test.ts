import { assert } from 'chai';
import { mount, Wrapper, createLocalVue } from '@vue/test-utils';
import ButtonGroup from '../';
import { Button } from '../../Button';

describe('ButtonGroup', () => {
  let localVue = createLocalVue();
  beforeEach(() => {
    localVue = createLocalVue();
  });

  it('renders grouped buttons', () => {
    const buttonGroup = mount({
      components: { Button, ButtonGroup },
      template: `
      <ButtonGroup>
        <Button>b1</Button>
        <Button>b2</Button>
        <Button>b3</Button>
      </ButtonGroup>
      `,
    }
    , { localVue });
    const buttons = buttonGroup.findAll(Button);
    assert.lengthOf(buttons, 3);
    assert(buttons.wrappers.every(w => w.classes('fd-button--grouped')), 'Every button is grouped');
  });

  it('renders compact buttons if group is compact', () => {
    const buttonGroup = mount({
      components: { Button, ButtonGroup },
      template: `
      <ButtonGroup compact={true}>
        <Button>b1</Button>
        <Button>b2</Button>
        <Button>b3</Button>
      </ButtonGroup>
      `,
    }, { localVue });
    const buttons = buttonGroup.findAll(Button);
    assert.lengthOf(buttons, 3);
    // We have no public api in order to determine whether a button is compact or not.
    // Because of that we have to check if the compact class is present.
    const buttonIsCompact = (button: Wrapper<any>) => button.classes('fd-button--compact');
    assert(buttons.wrappers.every(buttonIsCompact, 'Every button is compact'));
  });
});
