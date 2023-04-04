import "@/styles/globals.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import DefaultLayout from "@/layouts/default";
import { Provider } from "react-redux";
import store from "@/redux";

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || (() => <DefaultLayout> <Component {...pageProps} /></DefaultLayout>)

  return (
    <Provider store={store}>
      {getLayout(<Component {...pageProps} />)}
    </Provider>
  )
}
