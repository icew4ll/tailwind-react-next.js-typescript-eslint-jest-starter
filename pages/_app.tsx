/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import ParentApp from 'next/app'
import '@src/css/tailwind.css'
import '@src/css/alpha.css'
import 'katex/dist/katex.min.css'

class MyApp extends ParentApp {
  render() {
    const { Component, pageProps } = this.props
    return <Component {...pageProps} />
  }
}

export default MyApp
