import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import DefaultTextField from '../components/DefaultTextField';

const meta = {
  title: 'Text/DefaultTextField',
  component: DefaultTextField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],

  argTypes: {
    value: { control: 'text', description: '입력창 필드의 값' },
    placeholder: { control: 'text', description: '입력창 placeholder' },
    onChange: { action: 'changed', description: '입력창 필드 값 변경 이벤트' },
    errorMessage: { control: 'text', description: '에러 메시지' },
    isError: { control: 'boolean', description: '에러 상태' },
    iconAlt: {
      control: 'text',
      description: '아이콘 이미지 alt 속성',
      defaultBalue: 'icon',
    },
    iconPath: { control: 'text', description: '아이콘 이미지 경로' },
    onIconClick: { action: 'clicked', description: '아이콘 버튼 클릭 이벤트' },
  },
  args: {
    onIconClick: fn(),
  },
} satisfies Meta<typeof DefaultTextField>;

export default meta;
type Story = StoryObj<typeof meta>;

// Storybook에 제공할 스토리
export const Default: Story = {
  args: {
    value: '',
    placeholder: '텍스트를 입력해주세요',
    onChange: fn(),
    errorMessage: '텍스트를 확인해주세요',
    isError: false,
    iconAlt: 'icon',
    iconPath: 'ic-public-delete-dark.svg',
    onIconClick: fn(),
  },
};
