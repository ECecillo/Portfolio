import { Html, Head, Main, NextScript } from 'next/document'
import appTheme from '../themes/default';

Document.getServerSideProps = async (ctx) => {
  const initialProps = await Document.getInitialProps(ctx);
  const theme = ctx.req?.cookies?.themeSwitch ?? "light";

  return { ...initialProps, theme };
}

export default function Document(props) {
  let correctTheme = appTheme[(props?.theme === undefined ? "light" : props.theme)];

  const styles = {};
  Object.entries(correctTheme).forEach(([key, value]) => styles[`--${key}`] = value);

  return (
    <Html style={styles}>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Oxygen:wght@300&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300&family=Oxygen:wght@300&display=swap" rel="stylesheet" />
        <link rel="shortcut icon" type="image/x-icon" href="./public/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}


