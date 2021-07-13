import 'tailwindcss/tailwind.css';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <style global jsx>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
