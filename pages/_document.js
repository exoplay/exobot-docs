import Document, { Head, Main, NextScript } from 'next/document';
import flush from 'styled-jsx/server';
import theme from './theme';

export default class MyDocument extends Document {
  static getInitialProps ({ renderPage }) {
    const { html, head, errorHtml, chunks } = renderPage();
    const styles = flush();
    return { html, head, errorHtml, chunks, styles };
  }

  render () {
    const {
      fontFamily,
      color,
      backgroundColor
    } = theme;

    return (
      <html>
        <Head>
          <style></style>
        </Head>
        <body style={{ fontFamily, color, backgroundColor }}>
          {this.props.customValue}
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
