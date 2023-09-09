import { render, screen } from "@testing-library/react";
import Greet from "./Greet";


test('Greet returns correctly', () => {
    render(<Greet />);
    const textEl = screen.getByText(/hello/i);
    expect(textEl).toBeInTheDocument();
})

test('Greet renders with a name', () => {
    render(<Greet name='Alef' />);
    const textElement = screen.getByText(/alef/i);
    expect(textElement).toBeInTheDocument();
})