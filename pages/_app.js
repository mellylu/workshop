import Footer from "../components/footer/footer"
import Header from "../components/header/header"
import "../styles/styles.scss"

function MyApp({ Component, pageProps }) {
  return <div><Component {...pageProps}></Component><Footer/></div>
}

export default MyApp
