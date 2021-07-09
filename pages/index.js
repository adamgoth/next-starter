import Head from 'next/head';
import { Box } from 'theme-ui';

export default function Home() {
  return (
    <Box>
      <Head>
        <title>title</title>
        <meta name='description' content='description here' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>main</main>

      <footer>footer</footer>
    </Box>
  );
}
