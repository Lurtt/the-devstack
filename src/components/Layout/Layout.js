import React, { Fragment } from 'react'
import styled from 'styled-components'

const Layout = ({ children }) => (
  <Fragment>
    <StyledHeader>Toolbar</StyledHeader>
    {children}
    <StyledFooter>Footer</StyledFooter>
  </Fragment>
)

const StyledHeader = styled.header`
  color: red;
`

const StyledFooter = styled.footer`
  color: blue;
`

export default Layout
