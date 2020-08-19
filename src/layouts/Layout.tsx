import React, { FC } from 'react';
import Head from 'next/head';

interface LayoutTypes {
  title: string
}

const Layout: FC<LayoutTypes> = ({ children, title }) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8"/>
      <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
    </Head>
    {children}
  </>
);

export default Layout;
