import { Provider } from 'react-redux';
import { store } from '../app/store';
import CustomCursor from '../components/CustomCursor';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <CustomCursor />
      <Component {...pageProps} />
    </Provider>
  );
};

export default MyApp;
