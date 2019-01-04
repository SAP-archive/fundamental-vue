import { Component, Base, Prop } from "@/core";
import { Input } from '@/components/Form';

interface Props {
    id?: string;
    placeholder?: string;
    value?: string | number | null;
    ariaLabel?: string;
};

@Component('TimeInput')
export class TimeInput extends Base<Props> {
    @Prop(String) public id!: string;
    @Prop(String) public placeholder!: string;
    @Prop(String) public value!: string | null;
    @Prop(String) public ariaLabel!: string | null;

    public render(){
        return (
            <div class='fd-time__input'>
                <Input id={this.id} type='text' aria-label={this.ariaLabel} value={this.value} placeholder={this.placeholder}></Input>
            </div>
        );
    }
}