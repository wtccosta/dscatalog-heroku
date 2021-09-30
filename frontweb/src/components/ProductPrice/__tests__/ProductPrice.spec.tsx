import { render, screen } from '@testing-library/react';
import ProductPrice from '..';

describe('ProductPriceTests', () => {
  test('ProductPrice shoud render R$', () => {
    const price = 10.1;
    render(<ProductPrice price={price} />);
    // screen.debug();
    expect(screen.getByText('R$')).toBeInTheDocument();
    expect(screen.getByText('10,10')).toBeInTheDocument();
  });


});
