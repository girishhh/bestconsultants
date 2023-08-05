import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import App from './App';
import store from './store';

const wrapper = (children) => <Provider store={store}>{children}</Provider>;

function setup(jsx) {
  return {
    ...render(wrapper(jsx)),
  };
}

describe('App.jsx tests', () => {
  it("the app title - 'Compliance Pro' is visible", async () => {
    setup(<App />);

    const app = await screen.findByText('Compliance Pro');
    expect(app).toBeInTheDocument();
  });
});
