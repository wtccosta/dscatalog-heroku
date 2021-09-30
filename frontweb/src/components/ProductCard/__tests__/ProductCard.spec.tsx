import { render, screen } from '@testing-library/react';
import { Product } from 'types/product';
import ProductCard from '..';

describe('ProductCardTests', () => {
  test('shoud render ProductCard', () => {
    const product  = {
        name: "Mac Book Air",
        imgUrl: "www.google.com",
        price: 15000.00
    } as Product

    render(<ProductCard product={product} />);
    expect(screen.getByAltText(product.name)).toBeInTheDocument();
    expect(screen.getByText(product.name)).toBeInTheDocument();
    expect(screen.getByText('R$')).toBeInTheDocument();
    expect(screen.getByText('15.000,00')).toBeInTheDocument();
  });
});
