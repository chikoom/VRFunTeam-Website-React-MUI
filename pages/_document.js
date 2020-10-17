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
          <style
            dangerouslySetInnerHTML={{
              __html: `
                
              /* roboto-300 - latin */
                @font-face {
                  font-display: swap;
                  font-family: 'Roboto';
                  font-style: normal;
                  font-weight: 300;
                  src: local('Roboto Light'), local('Roboto-Light'),
                       url('../fonts/roboto-v20-latin-300.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
                       url('../fonts/roboto-v20-latin-300.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
                }
                /* roboto-regular - latin */
                @font-face {
                  font-display: swap;
                  font-family: 'Roboto';
                  font-style: normal;
                  font-weight: 400;
                  src: local('Roboto'), local('Roboto-Regular'),
                       url('../fonts/roboto-v20-latin-regular.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
                       url('../fonts/roboto-v20-latin-regular.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
                }
                /* roboto-500 - latin */
                @font-face {
                  font-display: swap;
                  font-family: 'Roboto';
                  font-style: normal;
                  font-weight: 500;
                  src: local('Roboto Medium'), local('Roboto-Medium'),
                       url('../fonts/roboto-v20-latin-500.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
                       url('../fonts/roboto-v20-latin-500.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
                }
                /* roboto-700 - latin */
                @font-face {
                  font-display: swap;
                  font-family: 'Roboto';
                  font-style: normal;
                  font-weight: 700;
                  src: local('Roboto Bold'), local('Roboto-Bold'),
                       url('../fonts/roboto-v20-latin-700.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
                       url('../fonts/roboto-v20-latin-700.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
                }
                /* pacifico-regular - latin */
                @font-face {
                  font-display: swap;
                  font-family: 'Pacifico';
                  font-style: normal;
                  font-weight: 400;
                  src: local('Pacifico Regular'), local('Pacifico-Regular'),
                      url('../fonts/pacifico-v17-latin-regular.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
                      url('../fonts/pacifico-v17-latin-regular.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
                }
                /* raleway-100 - latin */
                @font-face {
                  font-display: swap;
                  font-family: 'Raleway';
                  font-style: normal;
                  font-weight: 100;
                  src: local(''),
                       url('../fonts/raleway-v18-latin-100.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
                       url('../fonts/raleway-v18-latin-100.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
                }
                /* raleway-regular - latin */
                @font-face {
                  font-display: swap;
                  font-family: 'Raleway';
                  font-style: normal;
                  font-weight: 400;
                  src: local(''),
                       url('../fonts/raleway-v18-latin-regular.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
                       url('../fonts/raleway-v18-latin-regular.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
                }
                /* raleway-700 - latin */
                @font-face {
                  font-display: swap;
                  font-family: 'Raleway';
                  font-style: normal;
                  font-weight: 700;
                  src: local(''),
                       url('../fonts/raleway-v18-latin-700.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
                       url('../fonts/raleway-v18-latin-700.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
                }
                /* raleway-italic - latin */
                @font-face {
                  font-display: swap;
                  font-family: 'Raleway';
                  font-style: italic;
                  font-weight: 400;
                  src: local(''),
                       url('../fonts/raleway-v18-latin-italic.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
                       url('../fonts/raleway-v18-latin-italic.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
                }
                <style> 
                  `,
            }}
          ></style>

          <link
            rel='preload'
            as='font'
            type='font/woff2'
            href='../fonts/pacifico-v17-latin-regular.woff2'
            crossOrigin='anonymous'
          ></link>

          <link
            rel='preload'
            as='font'
            type='font/woff2'
            href='../fonts/raleway-v18-latin-100.woff2'
            crossOrigin='anonymous'
          ></link>
          <link
            rel='preload'
            as='font'
            type='font/woff2'
            href='../fonts/raleway-v18-latin-700.woff2'
            crossOrigin='anonymous'
          ></link>
          <link
            rel='preload'
            as='font'
            type='font/woff2'
            href='../fonts/raleway-v18-latin-italic.woff2'
            crossOrigin='anonymous'
          ></link>
          <link
            rel='preload'
            as='font'
            type='font/woff2'
            href='../fonts/raleway-v18-latin-regular.woff2'
            crossOrigin='anonymous'
          ></link>
          <link
            rel='preload'
            as='font'
            type='font/woff2'
            href='../fonts/roboto-v20-latin-300.woff2'
            crossOrigin='anonymous'
          ></link>
          <link
            rel='preload'
            as='font'
            type='font/woff2'
            href='../fonts/roboto-v20-latin-500.woff2'
            crossOrigin='anonymous'
          ></link>
          <link
            rel='preload'
            as='font'
            type='font/woff2'
            href='../fonts/roboto-v20-latin-700.woff2'
            crossOrigin='anonymous'
          ></link>
          <link
            rel='preload'
            as='font'
            type='font/woff2'
            href='../fonts/roboto-v20-latin-regular.woff2'
            crossOrigin='anonymous'
          ></link>

          <link rel='icon' type='image/png' href='favicon.png'></link>
          {/* <link
            rel='preconnect'
            href='https://www.googletagmanager.com'
            crossorigin
          ></link>
          <link
            rel='preconnect'
            href='https://fonts.gstatic.com/'
            crossorigin
          ></link>
          <link
            href='https://fonts.googleapis.com/css?family=Pacifico|Raleway:100,400,400i,700|Roboto:300,400,500,700&display=swap'
            rel='stylesheet'
          ></link> */}

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
