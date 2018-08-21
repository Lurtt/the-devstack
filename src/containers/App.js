import React, { Component } from 'react'
import styled from 'styled-components'

import 'styles/normalize'
import { Layout } from 'components'

class App extends Component {
  render() {
    return (
      <Layout>
        <TempContent>here is the content</TempContent>
      </Layout>
    )
  }
}

const TempContent = styled.div``

export default App
