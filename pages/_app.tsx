// add bootstrap css 
import 'bootstrap/dist/css/bootstrap.css'
import { SSRProvider } from 'react-bootstrap';

import Layout from '@/component/layout'
import { store, wrapper } from '@/store/store'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { AuthProvider, ProtectRoute } from '@/context/auth';


function App({ Component, pageProps }: AppProps) {
  // console.log(pageProps)
  return (
    <>
      <AuthProvider>
        <ProtectRoute>

          <SSRProvider>

            <Provider store={store}>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </Provider>
          </SSRProvider>
        </ProtectRoute>
      </AuthProvider>

    </>
  )
}

export default wrapper.withRedux(App);