import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';
import i18n from '../i18n';
import store from '../store/store';
import Body from './Body';

test('renders the Body component', () => {
  render(
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <Body />
      </I18nextProvider>
    </Provider>
  );

  expect(screen.getByText(/Costes/i)).toBeInTheDocument();
});
