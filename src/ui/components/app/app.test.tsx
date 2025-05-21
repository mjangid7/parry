import { render, screen } from '@testing-library/react';
import { App } from 'ui/components/app/app';

describe('App component', () => {
  it('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });

  it('renders logo image', () => {
    render(<App />);
    const logoElement = screen.getByAltText(/logo/i);
    expect(logoElement).toBeInTheDocument();
  });

  it('renders instructional paragraph', () => {
    render(<App />);
    const paragraphElement = screen.getByText(
      /Edit `src\/ui\/components\/app\/app.tsx` and save to reload./i
    );
    expect(paragraphElement).toBeInTheDocument();
  });

  it('matches snapshot', () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
  });
});
