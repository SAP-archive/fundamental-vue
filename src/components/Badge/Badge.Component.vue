<template>
<div>
    <Header>Badge, Label & Status</Header>
    <Description>Badges and labels are used to indicate status. Colors, generally in combination with text, are used to easily highlight the state of an object. <br /><br/>
      The following colors should be used: <br /><br/>
        - <b>Black</b>: default or inactive status; <br /><br/>
        - <b>Green</b>: positive status, used for active, published, approved; <br /><br/>
        - <b>Orange</b>: a warning status or to indicate that an action can be taken; <br /><br/>
        - <b>Red</b>: error status.
    </Description>

    <Separator />
    <h3>Importing Badge, Label and Status to the component:</h3>
    <Import module="Badge, Label, Status" path="/fundamental-vue/src/" />
    <Separator />

    <Properties type="Inputs" :desc=description />
    <Separator />

    <h2>Default Badge</h2>
    <DocsTile>
        <Badge>Default</Badge>
        <Badge type="success">Default</Badge>
        <Badge type="warning">Default</Badge>
        <Badge type="error">Default</Badge>
    </DocsTile>
    <DocsText>{{defaultBadge}}</DocsText>

    <Separator />

    <h2>Pill Badge</h2>
    <Description><code>fd-badge--pill</code> modifier can be used to render a pill version of the badge.</Description>
    <DocsTile>
        <Badge modifier="pill">Default</Badge>
        <Badge type="success" modifier="pill">Default</Badge>
        <Badge type="warning" modifier="pill">Default</Badge>
        <Badge type="error" modifier="pill">Default</Badge>
    </DocsTile>
    <DocsText>{{pillBadge}}</DocsText>

    <Separator />

    <h2>Filled Badge</h2>
    <Description><code>fd-badge--filled</code> modifier can be used to render a filled version of the badge.</Description>
    <DocsTile>
        <Badge modifier="filled">Default</Badge>
        <Badge type="success" modifier="filled">Default</Badge>
        <Badge type="warning" modifier="filled">Default</Badge>
        <Badge type="error" modifier="filled">Default</Badge>
    </DocsTile>
    <DocsText>{{filledBadge}}</DocsText>

    <Separator />

    <h2>Label</h2>
    <DocsTile>
        <Label>Default</Label>
        <Label type="success">Default</Label>
        <Label type="warning">Default</Label>
        <Label type="error">Default</Label>
    </DocsTile>
    <DocsText>{{label}}</DocsText>

        <Separator />
        <h2>Status</h2>
        <Description> Status conveys the status information that be either a text with a value state, or an icon.</Description>
        <br/>
        <Properties type="Inputs" :desc=status.properties />
        <br/>
        <h3>Status Indicator Label with build in status icons</h3>
        <DocsTile>
            <Status>Default</Status>
            <Status type="available">Available</Status>
            <Status type="away">Away</Status>
            <Status type="busy">Busy</Status>
            <Status type="offline">Appear Offline</Status>
        </DocsTile>
        <DocsText>{{status.statusIndicatorBuiltInIconCode}}</DocsText>
        <br/>
        <h3>Status Indicator Label with any icons</h3>
        <DocsTile>
            <Status>Default</Status>
            <Status icon="history">History</Status>
            <Status icon="alert">Alert</Status>
            <Status icon="accept">Accept</Status>
            <Status icon="action">Action</Status>
        </DocsTile>
        <DocsText>{{status.statusIndicatorAnyIconCode}}</DocsText>
        <br/>
        <h3>Status Indicator Label with semantic colors</h3>
        <DocsTile>
            <Status>Default</Status>
            <Status type="success">Success</Status>
            <Status type="warning">Warning</Status>
            <Status type="error">Error</Status>
        </DocsTile>
        <DocsText>{{status.statusIndicatorSemanticColorCode}}</DocsText>

        <Separator />
</div>
</template>

<script>
import Badge from "./Badge";
import Label from "./Label";
import Status from "./Status";
import Header from "../documentation/Header";
import Separator from "../documentation/Separator";
import Description from "../documentation/Description";
import DocsText from "../documentation/DocsText";
import DocsTile from "../documentation/DocsTile";
import Import from "../documentation/Import";
import Properties from "../documentation/Properties";

const defaultBadgeCode = `<Badge>Default</Badge>
<Badge type="success">Default</Badge>
<Badge type="warning">Default</Badge>
<Badge type="error">Default</Badge>`

const pillBadgeCode = `<Badge modifier="pill">Default</Badge>
<Badge type="success" modifier="pill">Default</Badge>
<Badge type="warning" modifier="pill">Default</Badge>
<Badge type="error" modifier="pill">Default</Badge>`

const filledBadgeCode = `<Badge modifier="filled">Default</Badge>
<Badge type="success" modifier="filled">Default</Badge>
<Badge type="warning" modifier="filled">Default</Badge>
<Badge type="error" modifier="filled">Default</Badge>`

const labelCode = `<Label>Default</Label>
<Label type="success">Default</Label>
<Label type="warning">Default</Label>
<Label type="error">Default</Label>`

const statusIndicatorBuiltInIconCode = `<Status>Default</Status>
<Status type="available">Available</Status>
<Status type="away">Away</Status>
<Status type="busy">Busy</Status>
<Status type="offline">Appear Offline</Status>`

const statusIndicatorAnyIconCode = `<Status>Default</Status>
<Status icon="history">History</Status>
<Status icon="alert">Alert</Status>
<Status icon="accept">Accept</Status>
<Status icon="action">Action</Status>`

const statusIndicatorSemanticColorCode = `<Status>Default</Status>
<Status type="success">Success</Status>
<Status type="warning">Warning</Status>
<Status type="error">Error</Status>`

export default {
    name: "BadgeComponent",
    components: {
        Badge,
        Label,
        Status,
        Header,
        Separator,
        Description,
        DocsText,
        DocsTile,
        Import,
        Properties
    },
    data() {
        return {
            defaultBadge: defaultBadgeCode,
            pillBadge: pillBadgeCode,
            filledBadge: filledBadgeCode,
            label: labelCode,
            description: [{
                    name: 'type',
                    dataType: 'String',
                    description: 'The type indicates the status of the badge/label. Options include default, success, warning, and error. Leave empty for default.'
                },
                {
                    name: 'modifier',
                    dataType: 'String',
                    description: 'Modifiers can be pill and filled. Leave empty for normal.'
                }
            ],
            status: {
                statusIndicatorBuiltInIconCode,
                statusIndicatorAnyIconCode,
                statusIndicatorSemanticColorCode,
                properties: [{
                    name: 'type',
                    dataType: 'String',
                    description: 'Indicates the type of the Status'
                }, {
                    name: 'icon',
                    dataType: 'sap.ui.core.URI',
                    description: 'Indicates the icon to be displayed as graphical element before the status text. It can be an image or an icon from the icon font'
                }]
            }
        }
    }
};
</script>

<style scoped>
.fd-badge,
.fd-label,
.fd-status-label {
    margin-right: 20px;
}
</style>
