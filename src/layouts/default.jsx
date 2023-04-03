
import Head from "next/head";
import AppHeader from "@/components/general/AppHeader";
import AppFooter from "@/components/general/AppFooter";


export default function DefaultLayout({children}) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>Bosa Noga</title>
      </Head>
      <AppHeader />
      <main className="container">{children}</main>
      <AppFooter />
    </>
  )
}
