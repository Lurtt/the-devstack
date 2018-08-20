import React, { Fragment } from 'react'

const Layout = ({ children }) => (
  <Fragment>
    <header>Toolbar</header>
    {children}
    <footer>Footer</footer>
  </Fragment>
)

export default Layout
