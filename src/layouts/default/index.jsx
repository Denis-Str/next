import Head from "next/head";
import AppHeader from "@/components/general/AppHeader";
import AppFooter from "@/components/general/AppFooter";
import styles from "@/layouts/default/default.module.scss";

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
      <main className="container">
        <div className="row">
          <div className="col">
            <div className={styles.banner}>
              <img src="/img/banner.jpg" className="img-fluid" alt="К весне готовы!"/>
              <h2 className={styles['banner-header']}>К весне готовы!</h2>
            </div>
          </div>
        </div>
        {children}
      </main>
      <AppFooter />
    </>
  )
}
