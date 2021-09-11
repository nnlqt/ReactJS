import { Button } from '../index';
import { render, screen } from '@testing-library/react'

describe('Button', () => {
    it('matches snapshot', () => {
        const btn = render(<Button>{() => <span />}</Button>);
        
        expect(btn).toMatchSnapshot();
    });

    it('calls onClick when clicked', () => {
        const handleClick = jest.fn();
        render(<Button onClick={handleClick}>{() => <span>Text</span>}</Button>);

        const clickable = screen.getByText('Text');
        clickable.click();

        expect(handleClick).toHaveBeenCalledTimes(1);
    });
});