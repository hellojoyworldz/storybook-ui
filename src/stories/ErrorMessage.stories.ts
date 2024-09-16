import type { Meta, StoryObj } from '@storybook/react';

// 테스트할 컴포넌트
import ErrorMessage from '../components/ErrorMessage';

// Storybook에 컴포넌트에 대한 메타데이터를 전달하는 객체
const meta = {
  title: 'Text/ErrorMessage', // 그룹화 및 표시
  component: ErrorMessage, // 사용할 컴포넌트
  //  레이아웃 및 기타 설정을 정의하는 옵션
  parameters: {
    layout: 'centered', // 컴포넌트를 중앙에 위치
  },
  tags: ['autodocs'], // 스토리북의 자동 문서화 기능
  // props 설정
  argTypes: {
    children: { control: 'text', description: 'ErrorMessage 내용' },
  },
} satisfies Meta<typeof ErrorMessage>;

export default meta;
type Story = StoryObj<typeof meta>;

// Storybook에 제공할 스토리
export const Default: Story = {
  args: {
    children: '에러메세지는 여기로',
  },
};
