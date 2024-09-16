import type { Preview } from '@storybook/react';
import '@fontsource/noto-sans-kr';
import '@fontsource/noto-sans-kr/400.css';
import '../src/index.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
