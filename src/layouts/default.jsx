export default function DefaultLayout({children}) {
  return (
    <>
      <header>
        Header
      </header>
      <main>{children}</main>
      <footer>
        Footer
      </footer>
    </>
  )
}
