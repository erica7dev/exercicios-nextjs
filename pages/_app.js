import '../styles/globals.css'

//component layout
import MainContainer from '../components/MainContainer'

function MyApp({ Component, pageProps }) {
  return (
    <MainContainer>
      <Component {...pageProps} />
    </MainContainer>
  )
}

export default MyApp
