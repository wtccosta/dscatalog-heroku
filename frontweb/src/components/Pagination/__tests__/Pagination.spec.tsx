import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Pagination from '..';

describe('Pagination tests', () => {
  test('Pagination must return 3 items', () => {
    const pageCount = 3;
    const range = 3;

    render(<Pagination pageCount={pageCount} range={range} />);

    const page1 = screen.getByText('1');
    const page2 = screen.getByText('2');
    const page3 = screen.getByText('3');
    const page4 = screen.queryByText('4');

    expect(page1).toBeInTheDocument();
    expect(page1).toHaveClass('pagination-link-active');
    expect(page2).toBeInTheDocument();
    expect(page3).toBeInTheDocument();
    expect(page4).not.toBeInTheDocument();
  });

  test('next arrow should call onChange', () => {
    const pageCount = 3;
    const range = 3;
    const onChange = jest.fn();

    render(
      <Pagination pageCount={pageCount} range={range} onChange={onChange} />
    );

    const arrowNext = screen.getByTestId('arrow-next');
    userEvent.click(arrowNext);

    expect(onChange).toHaveBeenCalledWith(1);
  });

  test('previus arrow should call onChange', () => {
    const forcePage = 1;
    const pageCount = 3;
    const range = 3;
    const onChange = jest.fn();

    render(
      <Pagination pageCount={pageCount} range={range} onChange={onChange} forcePage={forcePage} />
    );

    const arrowPrevius = screen.getByTestId('arrow-previus');
    userEvent.click(arrowPrevius);

    expect(onChange).toHaveBeenCalledWith(0);
  });

    test('click on page item should call onChange', () => {
      const pageCount = 3;
      const range = 3;
      const onChange = jest.fn();

      render(
        <Pagination
          pageCount={pageCount}
          range={range}
          onChange={onChange}
        />
      );

      const item = screen.getByText('2');
      userEvent.click(item);

      expect(onChange).toHaveBeenCalledWith(1);
    });


});
