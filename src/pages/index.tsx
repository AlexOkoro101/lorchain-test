import EmptyState from '@/components/emptystate'
import LoadingState from '@/components/loadingState'
import Navbar from '@/components/navbar'
import Repositories from '@/components/repositories'
import Sidebar from '@/components/sidebar'
import useGithubUser from '@/hooks/useGithubUser'
import { User } from '@/types'
import Head from 'next/head'

export default function Home() {
  const { user, error, isLoading }: User = useGithubUser();
  return (
    <>
      <Head>
        <title>LorChain Test</title>
        <meta name="description" content="LorChaint Test" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-bg">
        <Navbar />
        <main className="px-[3.563rem] py-[2.438rem] flex gap-[6rem] items-start h-screen">
          {isLoading ? (
            <LoadingState />
          ) : (
            <>
              {(Object.keys(user ?? {}).length > 0 || !user) ? (
                <>
                  <Sidebar />
                  <Repositories />
                </>
              ) : error ? (
                <EmptyState 
                  type="user"
                />
              ) : (
                <EmptyState 
                  type="default"
                />
              )}
            </>
          )}
        </main>
      </div>
    </>
  )
}
