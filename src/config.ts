import React, { Component } from 'react'
import { RouteProps } from 'react-router-dom'

interface Page extends RouteProps {
  id: number
  name: string
  title: string
  pageProps?: any
}
interface Config {
  pages: Page[]
}

const config: Config = {
  pages: [
    {
      id: 1,
      name: 'Home',
      title: 'Olx Home Page',
      pageProps: {},
      path: '/',
      exact: true,
    },
    {
      id: 2,
      name: 'Item',
      title: 'Olx Item Page',
      pageProps: {},
      path: '/item',
      exact: true,
    },
  ],
}

export default config
