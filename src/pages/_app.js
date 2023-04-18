import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/globals.scss";
import DefaultLayout from "@/layouts/default";
import { Provider } from "react-redux";
import { wrapper } from "@/redux";
axios.defaults.baseURL = 'http://localhost:7070';

export default function App({ Component, ...rest }) {
  const { store, props } = wrapper.useWrappedStore(rest);

  const { pageProps } = props;
  const getLayout = Component.getLayout || (() => <DefaultLayout> <Component {...pageProps} /></DefaultLayout>)

  return (
    <Provider store={store}>
      {getLayout(<Component {...pageProps} />)}
    </Provider>
  )
}
