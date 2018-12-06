
import { Component, Prop } from 'vue-property-decorator';
import { Api } from '@/api';
import { mixins } from 'vue-class-component';
import { Uid } from '@/mixins';
import { Input, InputGroup } from '../Form';
import { componentName } from '@/util';
import { ClickAwayContainer } from '../ClickAwayContainer';
import { Popover } from '../Popover';
import { Button } from '../Button';

interface Props {
    uid?: string;
    value?: string | null;
    placeholder?: string;
    ariaLabel?: string;
    popoverVisible?: boolean;
    compact?: boolean;
}

@Component({
    name: componentName('SearchInput'),
    components: {
        Input,
        InputGroup,
        ClickAwayContainer
    }
})

@Api.Component('Search Input', component => {
    component.addEvent('search', 'Triggered when the search button is clicked or enter is pressed from the keyboard.');
    component.addEvent('autoComplete', 'Trigerred when the value in the SearchInput is changed. \n NOTE: This event will get trigerred only if there are children components in the suggestion.');
})

export class SearchInput extends mixins(Uid) {
    @Api.Prop('Value set in the Search Input', prop => prop.type(String))
    @Prop({ default: '', required: false, type: String })
    public value!: string;

    @Api.Prop('Placeholder in case the SearchInput is empty', prop => prop.type(String))
    @Prop({ type: String, default: '', required: false })
    public placeholder!: string;

    @Api.Prop('Aria Label', prop => prop.type(String))
    @Prop({ type: String, default: 'Search Input', required: false })
    public ariaLabel!: string;

    @Api.Prop('whether search input is compact', prop => prop.type(Boolean))
    @Prop({ type: Boolean, default: false })
    public compact!: boolean;

    public $tsxProps!: Readonly<{}> & Readonly<Props>;
    private searchValue: string = this.value;

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

    public render() {
        let suggestionList = this.$slots.default;
        let enableSuggest = suggestionList && suggestionList.length > 0;
        return (
            <div class='fd-search-input'>
                {enableSuggest === true ? (<Popover noArrow={true} popoverVisible={false}>
                    <div class='fd-combobox-control' slot='control' >
                        <InputGroup afterClass={'fd-input-group__addon--button'} compact={this.compact}>
                            <Input id={this.uid} value={this.searchValue} placeholder={this.placeholder}
                                nativeOn-keyup={this.handleKeyboardSearch}
                                on-input={this.setCurrentValue} compact={this.compact} />
                            <Button slot='after' class='fd-button--icon fd-button--secondary sap-icon--search'
                                on-click={this.handleSearchClick} />
                        </InputGroup>
                    </div>
                    {suggestionList}
                </Popover>) : <div class='fd-combobox-control' slot='control'>
                        <InputGroup afterClass={'fd-input-group__addon--button'} compact={this.compact}>
                            <Input id={this.uid} value={this.searchValue} placeholder={this.placeholder}
                                nativeOn-keyup={this.handleKeyboardSearch}
                                on-input={this.setCurrentValue} compact={this.compact} />
                            <Button slot='after' class='fd-button--icon fd-button--secondary sap-icon--search'
                                on-click={this.handleSearchClick} />
                        </InputGroup>
                    </div>}
            </div>
        );
    }
}