import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheets } from '@material-ui/core/styles'
import { GA_TRACKING_ID } from '../src/functions/gtag'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          {/* PWA primary color */}
          {/*<meta name='theme-color' content={theme.palette.primary.main} />*/}
          <link rel='icon' type='image/png' href='favicon.png'></link>
          <link
            rel='stylesheet'
            href='https://fonts.googleapis.com/css?family=Pacifico|Raleway:100,400,400i,700|Roboto:300,400,500,700&display=swap'
          />

          <meta property='og:type' content='website' />
          <meta property='og:title' content='website' />
          <meta
            property='og:image'
            content='https://res.cloudinary.com/chikoom/image/upload/v1602774567/vrfunteam/facebookAd_dyqjag.png'
          />
          <meta property='og:image:type' content='image/png' />
          <meta property='og:image:width' content='1200' />
          <meta property='og:image:height' content='1200' />
          <meta
            property='og:image:alt'
            content='VRFunTeam Better Than Reality'
          />
          {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}

          {/* <script
            async
            src='https://www.googletagmanager.com/gtag/js?id=G-ZZVGT0FZWP'
          ></script>
          <script
            async
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            
              gtag('config', 'G-ZZVGT0FZWP');`,
            }}
          /> */}

          <>
            {/* Global Site Tag (gtag.js) - Google Analytics */}
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', '${GA_TRACKING_ID}', {
                      page_path: window.location.pathname,
                    });
                  `,
              }}
            />
          </>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with server-side generation (SSG).
MyDocument.getInitialProps = async ctx => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  // Render app and page and get the context of the page with collected side effects.
  const sheets = new ServerStyleSheets()
  const originalRenderPage = ctx.renderPage

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: App => props => sheets.collect(<App {...props} />),
    })

  const initialProps = await Document.getInitialProps(ctx)

  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [
      ...React.Children.toArray(initialProps.styles),
      sheets.getStyleElement(),
    ],
  }
}
