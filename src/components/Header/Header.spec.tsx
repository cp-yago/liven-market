import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import Header from './Header';

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

describe('Testing header component', () => {
  it('renders correctly', () => {
    render(<Header />);
    expect(screen.getByText('LivenMarket')).toBeInTheDocument();
  });

  it('should show go back button when prop showGoBackButton = true ', () => {
    render(<Header showGoBackButton />);
    expect(screen.getByTestId('go-back-button')).toBeInTheDocument();
  });

  it('redirects to product list when clicked', () => {
    render(<Header showGoBackButton />);
    const goBackButton = screen.getByTestId('go-back-button');
    fireEvent.click(goBackButton);
    expect(mockHistoryPush).toHaveBeenCalledWith('/');
  });
});
