import Head from 'next/head'
import 'tailwindcss/tailwind.css';
import Layout from '../components/Layout';
import { Provider } from "react-redux";
import store from '../src/redux/store';
import { useEffect, useState } from 'react';



function MyApp({ Component, pageProps }) {

  const [splash, setSplash] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setSplash(false)
    }, 5000);
  }, [])

  return (
    <Provider store={store}>
      {
      
      splash ? 
        <div>
            <div className="grid place-content-center  min-h-screen w-full bg-gray-100 lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 font-light text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                </svg>
            </div>
            <Layout>
                <Head>
                  <title>tunetraq - Keeping track of the world's trending music.</title>
                  <link rel="icon" href="/favicon.ico" />
                </Head>
              <div className="hidden min-h-screen w-full bg-gray-100 lg:grid lg:place-content-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-25 w-24 font-light text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                </svg>
              </div>
            </Layout>
        </div> : 
      <Layout >
        <Component {...pageProps} />
      </Layout>
      
      }
      
    </Provider>
    ) 
}

export default MyApp
