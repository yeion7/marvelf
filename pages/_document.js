import Document, { Head, Main, NextScript } from 'next/document';
import flush from 'styled-jsx/server';
import React from 'react';

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const { html, head, errorHtml, chunks } = renderPage();
    const styles = flush();
    return { html, head, errorHtml, chunks, styles };
  }

  render() {
    return (
      <html lang="es">
        <Head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
          <meta name="theme-color" content="#333" />
          <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet" />

          <meta name="description" content="Find your favorite character of marvel" />
          <title>Marvelf</title>

          <style jsx global>{`
      * {
        margin: 0;
        box-sizing: border-box;
      }
      body {
        margin: 0;
        padding: 0;
        font-family: 'Montserrat', sans-serif;
        font-size: 16px;
        width: 100%;
        min-width: 375px;
        background: #f4f4f4;
      }
      a {
        text-decoration: none;
        color: inherit;
      }
    `}</style>
        </Head>
        <body className="custom_class">
          {this.props.customValue}
          <Main />
          <NextScript />
        </body>

      </html>
    );
  }
}
