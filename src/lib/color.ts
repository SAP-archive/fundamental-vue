const colorMapping = {
    'action-1': 'Action 1',
    'text-1': 'Text 1',
    'text-2': 'Text 2',
    'text-3': 'Text 3',
    'background-1': 'Background 1',
    'background-2': 'Background 2',
    'neutral-1': 'Neutral 1',
    'neutral-2': 'Neutral 2',
    'neutral-3': 'Neutral 3',
    'status-1': 'Status 1',
    'status-2': 'Status 2',
    'status-3': 'Status 3',
    'accent-1': 'Accent 1',
    'accent-2': 'Accent 2',
    'accent-3': 'Accent 3',
    'accent-4': 'Accent 4',
    'accent-5': 'Accent 5',
    'accent-6': 'Accent 6',
    'accent-7': 'Accent 7',
    'accent-8': 'Accent 8',
    'accent-9': 'Accent 9',
    'accent-10': 'Accent 10',
    'accent-11': 'Accent 11',
    'accent-12': 'Accent 12',
    'accent-13': 'Accent 13',
    'accent-14': 'Accent 14',
    'accent-15': 'Accent 15',
};

export type Color = keyof (typeof colorMapping);
export const Colors = Object.keys(colorMapping) as Color[];
export const backgroundColorClassName = (color: Color): string => `fd-has-background-color-${color}`;
export const isColor = (raw: any): raw is Color => {
    if (typeof raw !== 'string') {
        return false;
    }
    return raw in colorMapping != null;
};
