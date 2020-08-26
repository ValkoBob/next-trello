import React, { FC } from 'react';
import { Provider } from 'react-redux';
import 'normalize.css';
import '../styles/globals.scss';
import store from '../src/redux/store';

interface MyAppProps {
  Component: any,
  pageProps: any,
}

const MyApp: FC<MyAppProps> = ({ Component, pageProps }): JSX.Element => (
  <Provider store={store}>
    <Component {...pageProps} />
  </Provider>);
export default MyApp;
