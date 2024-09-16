import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import IconButton from '../components/IconButton';
import deleteIcon from '../assets/ic-asset-delete-dark.svg';

const meta = {
  title: 'Buttons/IconButton',
  component: IconButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    alt: {
      control: 'text',
      description: '이미지 alt 속성',
      defaultBalue: 'icon',
    },
    iconPath: { control: 'text', description: '이미지 경로' },
    onClick: { action: 'clicked', description: '버튼 클릭 이벤트' },
  },
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// Storybook에 제공할 스토리
export const Default: Story = {
  args: {
    alt: 'icon',
    // iconPath:
    //  'https://raw.githubusercontent.com/jasonkang14/design-system-lecture/a2994921d732f5f21bbec015404d82227bce6e1a/public/icons/ic-public-delete-dark.svg',
    // iconPath: 'ic-public-delete-dark.svg',
    iconPath: deleteIcon,
  },
};
