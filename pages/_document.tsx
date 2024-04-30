import { Head, Html, Main, NextScript } from 'next/document';

function Document() {
  return (
    <Html>
      <Head>
        <meta
          name="google-site-verification"
          content="jJU7gklRBoNg-dWoFFYKqMg2jN6vegf56-AwE2AtfrY"
        />
        <meta property="og:title" content="Dalilak" />
        <meta property="og:description" content="Dalilak Website" />
        <meta property="og:image" content="https://dalilak.ngo/api/og-image" />
        <script
          src="https://kit.fontawesome.com/027db3ea3f.js"
          crossOrigin="anonymous"
          async
        ></script>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons|Material+Icons+Outlined"
          rel="stylesheet"
        />
        <script
          src="https://cdn-eu.readspeaker.com/script/11950/webReader/webReader.js?pids=wr"
          type="text/javascript"
          id="rs_req_Init"
          defer
        ></script>
        {/*
        TODO: get API Key from your Product manager, update src and uncomment the script.
        <script
          id="ze-snippet"
          src="https://static.zdassets.com/ekr/snippet.js?key=37922dda-c8d9-441f-9a01-449297f3bb32"
          async> </script>*/}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default Document;
