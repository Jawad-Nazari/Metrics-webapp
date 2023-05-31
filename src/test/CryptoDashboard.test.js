import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import CryptoDashboard from '../routes/CryptoDashboard';
import store from '../redux/store';

describe('CryptoDashboard page testinfg', () => {
  test('Renders CryptoDashboard page correctly', () => {
    const tree = render(
      <Provider store={store}>
        <Router>
          <CryptoDashboard />
        </Router>
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
