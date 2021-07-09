import { ThemeProvider } from 'theme-ui';
import theme from 'lib/theme.js';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
