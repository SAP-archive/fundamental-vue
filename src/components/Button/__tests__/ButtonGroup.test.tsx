import { assert } from 'chai';
import { mount, Wrapper } from '@vue/test-utils';
import { Button, ButtonGroup } from '../';

describe('ButtonGroup', () => {
  it('renders grouped buttons', () => {
    const buttonGroup = mount({
      render() {
        return (
          <ButtonGroup>
            <Button>b1</Button>
            <Button>b2</Button>
            <Button>b3</Button>
          </ButtonGroup>
        );
      },
    });
    const buttons = buttonGroup.findAll<Button>(Button);
    assert.lengthOf(buttons, 3);
    assert(buttons.wrappers.every(w => w.vm.isGrouped), 'Every button is grouped');
  });

  it('renders compact buttons if group is compact', () => {
    const buttonGroup = mount({
      render() {
        return (
          <ButtonGroup compact={true}>
            <Button>b1</Button>
            <Button>b2</Button>
            <Button>b3</Button>
          </ButtonGroup>
        );
      },
    });
    const buttons = buttonGroup.findAll<Button>(Button);
    assert.lengthOf(buttons, 3);
    // We have no public api in order to determine whether a button is compact or not.
    // Because of that we have to check if the compact class is present.
    const buttonIsCompact = (button: Wrapper<Button>) => button.classes('fd-button--compact');
    assert(buttons.wrappers.every(buttonIsCompact, 'Every button is compact'));
  });
});
