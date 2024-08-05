import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { ThemeButton } from './ThemeButton';
import styles from './ThemeButton.module.css';

const meta = {
    title: 'shared/ThemeButton',
    component: ThemeButton,

    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
    },
    // @ts-ignore
    args: { onClick: fn() },
} satisfies Meta<typeof ThemeButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        themeB: styles.butTheme,
    },
};

export const PrimaryBackgroundColor: Story = {
    args: {
        ...Primary.args,
        themeB: styles.red,
    //   label: 'Primary with a really long name',
    //   className:'red',
    },

};
