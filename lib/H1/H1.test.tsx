import { render, screen } from '@testing-library/react';
import { expect, it } from 'vitest';
import H1 from './H1';

it('should render text in heading 1', () => {
  render(<H1 data-testid="H1">heading 1</H1>);
  expect(screen.getByTestId('H1'))
    .toContainHTML("heading 1");
});
