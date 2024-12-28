import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Page from '../app/page';

describe('Page', () => {
  it('renders hello world', () => {
    render(<Page />);
    const element = screen.getByText('hello world');
    expect(element).toBeTruthy();
  });
}); 