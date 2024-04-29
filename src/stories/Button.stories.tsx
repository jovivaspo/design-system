import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Button } from '../components/Button/Button.component';
import { IconBadgeCheck } from '../components/Icons/IconBadgeCheck.component';
import { EnumSize, EnumVariant } from '../models';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text', defaultValue: 'Button' },
    size: {
      options: [EnumSize.small, EnumSize.medium, EnumSize.large],
      control: { type: 'select' },
    },
    variant: {
      options: [EnumVariant.primary, EnumVariant.secondary],
      control: { type: 'select' },
    },
    backgroundColor: { control: 'text' },
    textColor: { control: 'text' },
    borderColor: { control: 'text' },
    icon: { control: 'select', options: ['empty', 'check'], mapping: { empty: null, check: <IconBadgeCheck className='w-4 h-4' /> } },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    variant: EnumVariant.primary,
    label: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    variant: EnumVariant.secondary,
    label: 'Button',
  },
};

export const Customized: Story = {
  args: {
    variant: EnumVariant.primary,
    label: 'Button',
    backgroundColor: 'bg-secondary',
    textColor: 'text-primary',
    borderColor: 'border border-primary',
  },
};

export const DangerPrimary: Story = {
  args: {
    variant: EnumVariant.primary,
    label: 'Button',
    danger: true,
  },
};

export const DangerSecondary: Story = {
  args: {
    variant: EnumVariant.secondary,
    label: 'Button',
    danger: true,
  },
};

export const Large: Story = {
  args: {
    size: EnumSize.large,
    label: 'Button',
  },
};

export const Small: Story = {
  args: {
    size: EnumSize.small,
    label: 'Button',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    label: 'Button',
  },
};

export const Loading: Story = {
  args: {
    loading: true,
    label: 'Button',
  },
};
export const Icon: Story = {
  args: {
    label: 'Button',
    icon: <IconBadgeCheck className='w-4 h-4 text-white' />,
  },
};
