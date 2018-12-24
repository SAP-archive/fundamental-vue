import { Watch } from 'vue-property-decorator';
import { mixins } from 'vue-class-component';
import { UidMixin } from '@/mixins';
import { Input, InputGroup } from '../Form';
import { Popover, Button, Menu, MenuList } from '@/components';
import { Component, Event, Prop } from '@/core';

interface Props {
    uid?: string;
    value?: string | null;
    placeholder?: string;
    ariaLabel?: string;
    popoverVisible?: boolean;
    compact?: boolean;
}

@Component('SearchInput')
@Event('search', 'Triggered when the search button is clicked or enter is pressed from the keyboard.')
@Event('autoComplete', 'Trigerred when the value in the SearchInput is changed. \n NOTE: This event will get trigerred only if there are children components in the suggestion.')
export class SearchInput extends mixins(UidMixin) {
    @Prop('Value set in the Search Input', { default: '', type: String })
    public value!: string;

    @Prop('Placeholder in case the SearchInput is empty', { type: String, default: '' })
    public placeholder!: string;

    @Prop('Aria Label', { type: String, default: 'Search Input' })
    public ariaLabel!: string;

    @Prop('whether search input is compact', { type: Boolean, default: false })
    public compact!: boolean;

    public $tsxProps!: Readonly<{}> & Readonly<Props>;
    private searchValue: string = this.value;

    @Prop('whether search input is compact', { type: Boolean, default: false })
    public popoverVisible!: boolean;

    private currentPopoverVisible = this.popoverVisible;

    @Watch('value')
    public handleNewValue(newValue: string) {
        this.searchValue = newValue;
        this.$emit('input', this.searchValue);
    }

    private handleSearchClick() {
        this.emitSearch();
    }

    private setCurrentValue(newValue: string) {
        this.searchValue = newValue;
        this.emitSearch();
        this.$emit('update:value', this.searchValue);
    }

    private handleKeyboardSearch({ keyCode }: KeyboardEvent) {
        if (keyCode === 13) {
            this.emitSearch();
        } else if (this.$slots.default && this.$slots.default.length > 0) {
            this.emitAutoComplete();
        }
    }

    private emitSearch() {
        this.$emit('search', this.searchValue);
    }

    private emitAutoComplete() {
        this.$emit('autoComplete', this.searchValue);
    }

    private didSelectMenuItem() {
        this.currentPopoverVisible = false;
    }

    public render() {
        const suggestionList = this.$slots.default;
        const enableSuggest = suggestionList && suggestionList.length > 0;
        return (
            <div class='fd-search-input'>
                {enableSuggest === true ? (
                <Popover
                    noArrow={true}
                    on-visible={(value: boolean) => this.currentPopoverVisible = value}
                    popoverVisible={this.currentPopoverVisible}
                >
                    <div class='fd-combobox-control' slot='control' >
                        <InputGroup afterClass='fd-input-group__addon--button' compact={this.compact}>
                            <Input
                                value={this.searchValue}
                                placeholder={this.placeholder}
                                nativeOn-keyup={this.handleKeyboardSearch}
                                on-input={this.setCurrentValue}
                                compact={this.compact}
                            />
                            <Button styling='light' slot='after' icon='search' on-click={this.handleSearchClick} />
                        </InputGroup>
                    </div>
                    <Menu>
                        <MenuList on-select={this.didSelectMenuItem}>{suggestionList}</MenuList>
                    </Menu>
                </Popover>) : <div class='fd-combobox-control' slot='control'>
                        <InputGroup afterClass='fd-input-group__addon--button' compact={this.compact}>
                            <Input
                                value={this.searchValue}
                                placeholder={this.placeholder}
                                nativeOn-keyup={this.handleKeyboardSearch}
                                on-input={this.setCurrentValue}
                                compact={this.compact}
                            />
                            <Button
                                styling='light'
                                slot='after'
                                icon='search'
                                on-click={this.handleSearchClick}
                            />
                        </InputGroup>
                    </div>}
            </div>
        );
    }
}
