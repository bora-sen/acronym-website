import React from "react"
import Header from "../Header"
import Footer from "../Footer"

function MainLayout({ children }) {
  return (
    <main>
      <Header />
      <section>{children}</section>
      <Footer />
    </main>
  )
}

export default MainLayout
