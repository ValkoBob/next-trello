import { Provider } from 'react-redux';
import 'normalize.css';
import '../styles/globals.scss';
import store from '../src/redux/store';

const MyApp = ({ Component, pageProps }) => (
  <Provider store={store}>
    <Component {...pageProps} />
  </Provider>);
export default MyApp;
