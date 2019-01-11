import { Component, Event, Base, Prop } from '@/core';
import { Popover } from '../Popover';
import { InputGroup, Input } from '../Form';
import { Button } from '../Button';
import { TimeItem } from './TimeItem';

interface Props {
    value?: string | null;
    placeholder?: string | null;
    ariaLabel?: string | null;
    showMeridian?: boolean;
    compact?: boolean;
}

@Component('TimePicker')
@Event('timeItemUpdate', 'Event triggered from the TimeItem Input Popover in the TimePicker')
export class TimePicker extends Base<Props> {
    @Prop('ID of the TimePicker', {
        type: String,
    })
    public id!: string | null;

    @Prop('Placeholder of the TimePicker', {
        type: String,
    })
    public placeholder!: string | null;

    @Prop('Value of Time to be set in the time Item. This has to be in the format "hh:mm:ss" / "hh:mm" for the 24 hour clock or "hh:mm:ss a" / "hh:mm a" for the 12 hour clock', {
        type: String,
        // validator needs to be added.
    })
    public value!: string | null;

    @Prop('aria-label for the TimePicker', {
        type: String,
        default: 'Time Picker',
    })
    public ariaLabel!: string | null;

    @Prop('whether TimePicker is compact', { type: Boolean, default: false })
    public compact!: boolean;

    @Prop('If Meridian should be shown',{
        type: Boolean,
        default: false,
    })
    public showMeridian!: boolean;

    public $tsxProps!: Readonly<{}> & Readonly<Props>;
    private timeValue: string | null = this.value;

    public render() {
        return (
            <div class='fd-time-picker'>
                <Popover noArrow={true} popoverVisible={false}>
                    <div class='fd-popover__control' slot='control'>
                        <InputGroup compact={this.compact} afterClass={'fd-input-group__addon--button'}>
                            <Input value={this.timeValue}></Input>
                            <Button styling='light' slot='after' icon='fob-watch'></Button>
                        </InputGroup>
                    </div>
                    <TimeItem value={this.timeValue} showMeridian={this.showMeridian}></TimeItem>
                </Popover>
            </div>
        );
    }
}
