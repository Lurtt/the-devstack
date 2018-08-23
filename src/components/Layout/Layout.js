import React, { Fragment } from 'react'
import styled from 'styled-components'

import { media } from 'styles/mixins'

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
  background: blue;

  ${media.desktop`background: green;`}
  ${media.tablet`background: red;`}
  ${media.phone`background: yellow;`}
`

export default Layout
