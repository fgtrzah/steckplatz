import { render, screen } from '@testing-library/react';
import { expect, it } from 'vitest';
import H3 from './H3';

it('should render text in heading 1', () => {
  render(<H3 data-testid="H3">heading 3</H3>);
  expect(screen.getByTestId('H3'))
    .toContainHTML("heading 3");
});
