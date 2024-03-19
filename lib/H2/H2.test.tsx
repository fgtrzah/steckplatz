import { render, screen } from '@testing-library/react';
import { expect, it } from 'vitest';
import H2 from './H2';

it('should render text in heading 1', () => {
  render(<H2 data-testid="H2">heading 1</H2>);
  expect(screen.getByTestId('H2'))
    .toContainHTML("heading 1");
});
