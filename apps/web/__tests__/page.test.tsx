import Page from '../app/page';
import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

describe('Page', () => {
  it('renders with expected classes', () => {
    const { container } = render(<Page />);
    const element = container.querySelector('.size-40');
    expect(element).toBeTruthy();
  });
});
