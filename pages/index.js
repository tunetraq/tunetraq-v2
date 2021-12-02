import Head from 'next/head'
import Feed from '../components/Feed'

export default function Home() {

  return (
    <div className="bg-gray-100 min-h-screen" >
      <Head>
          <title>tunetraq - Keeping track of the world's trending music.</title>
          <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
          <Feed/>
      </div>
    </div>
  )
}
