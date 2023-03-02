import { GithubUserProvider } from '@/hooks/useGithubUser';
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <GithubUserProvider>
      <Component {...pageProps} />
    </GithubUserProvider>
  );
}
