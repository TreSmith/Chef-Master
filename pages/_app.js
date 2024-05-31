import React from 'react';
import App from 'next/app';
import { Layout } from '../components/Layout';
import '../styles/global.scss';
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/header.scss';

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.0/font/bootstrap-icons.css"
          />
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </>
    );
  }
}
