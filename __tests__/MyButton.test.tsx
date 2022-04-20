import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {
  render,
  waitFor,
  cleanup,
} from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from '../stories/MyButton.stories';

describe('MyButton', () => {
  afterEach(() => {
    cleanup();
  });

  const { Primary } = composeStories(stories);

  it('should contain our label', async () => {
    const { queryByText } = render(<Primary />);

    // https://testing-library.com/docs/guide-disappearance/
    await waitFor(() => {
      expect(queryByText(stories.Primary.args?.label ?? '')).toBeInTheDocument();
    });
  });
});