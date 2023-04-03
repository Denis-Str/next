import "@/styles/globals.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import DefaultLayout from "@/layouts/default";

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || (() => <DefaultLayout> <Component {...pageProps} /></DefaultLayout>)

  return getLayout(<Component {...pageProps} />)
}
