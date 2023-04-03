import AppHeader from "@/components/general/AppHeader";
import AppFooter from "@/components/general/AppFooter";

export default function DefaultLayout({children}) {
  return (
    <>
      <AppHeader />
      <main>{children}</main>
      <AppFooter />
    </>
  )
}
