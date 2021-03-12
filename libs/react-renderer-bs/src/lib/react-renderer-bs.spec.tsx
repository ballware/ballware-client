import React from 'react';
import { render } from '@testing-library/react';

import ReactRendererBs from './react-renderer-bs';

describe('ReactRendererBs', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactRendererBs />);
    expect(baseElement).toBeTruthy();
  });
});
