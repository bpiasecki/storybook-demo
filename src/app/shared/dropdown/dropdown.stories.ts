import { applicationConfig, type Meta, type StoryObj } from '@storybook/angular';

import { provideAnimations } from '@angular/platform-browser/animations';
import { DropdownComponent } from './dropdown.component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<DropdownComponent> = {
    title: 'Example/Dropdown',
    component: DropdownComponent,
    tags: ['autodocs'],
    decorators: [
        applicationConfig({
          providers: [provideAnimations()],
        }),
    ],
    render: (args: DropdownComponent) => ({
        props: {
            data: null,
            ...args,
        },
    }),
    argTypes: {
        data: [{ id: 10, name: 'text1' }, { id: 20, name: 'text2' }],
    },
};

export default meta;
type Story = StoryObj<DropdownComponent>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Empty: Story = {
    args: {
        data: [{ id: 10, name: 'text1' }, { id: 20, name: 'text2' }],
    },
};
