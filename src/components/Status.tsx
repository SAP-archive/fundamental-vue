import { Component, DefaultSlot, Prop, Base } from '@/core';

const typeMapping = {
    warning: 'Warning',
    error: 'Error',
    success: 'Success',
};

const statusIconMapping = {
    available: 'Available',
    away: 'Away',
    busy: 'Busy',
    offline: 'Offline',
};

type StatusType = keyof (typeof typeMapping);
const StatusTypes = Object.keys(typeMapping) as StatusType[];

type StatusIconType = keyof (typeof statusIconMapping);
const StatusIconTypes = Object.keys(statusIconMapping) as StatusIconType[];

interface Props {
    icon?: string | null;
    statusIcon?: StatusIconType;
    type?: StatusType | null;
}

@Component('Status')
@DefaultSlot('Text displayed inside the status.')
export class Status extends Base<Props> {
    @Prop('built-in status icon type', { acceptableValues: StatusIconTypes, type: String, default: null })
    public statusIcon!: StatusIconType;

    @Prop('status type', { acceptableValues: StatusTypes, type: String, default: null })
    public type!: StatusType | null;

    @Prop('icon displayed in the status indicator', { type: String, default: null })
    public icon!: string | null;

    public render() {
        return <span class={this.classes}>{this.$slots.default}</span>;
    }

    private get iconClasses() {
        const icon = this.icon;
        if (icon == null) {
            return {};
        }
        return {
            [`sap-icon--${icon}`]: true,
        };
    }

    private get classes() {
        return {
            'fd-status-label': true,
            'fd-status-label fd-status-label--success': this.type === 'success',
            'fd-status-label fd-status-label--warning': this.type === 'warning',
            'fd-status-label fd-status-label--error': this.type === 'error',

            'fd-status-label fd-status-label--available': this.statusIcon === 'available',
            'fd-status-label fd-status-label--away': this.statusIcon === 'away',
            'fd-status-label fd-status-label--busy': this.statusIcon === 'busy',
            'fd-status-label fd-status-label--offline': this.statusIcon === 'offline',
            ...this.iconClasses,
        };
    }
}
