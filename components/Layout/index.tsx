import React, { ReactNode } from 'react'
import Head from 'next/head'

import { Container } from 'react-bootstrap'
import Header from '../LayoutItem/Header'
import Footer from '../LayoutItem/Footer'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({
  children,
  title = 'This is the default title',
}: Props): JSX.Element => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="initial-scale=1.0, width=device-width"
      />
    </Head>
    <Header />
    <Container>{children}</Container>
    <Footer />
  </div>
)

export default Layout
