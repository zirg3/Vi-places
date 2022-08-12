import type { NextPage } from 'next'
import styles from '../assets/styles/Home.module.css'
import Footer from "../app/components/common/footer/Footer";


const Home: NextPage = () => {
  return (
      <div className={styles.container}>


        <Footer/>
      </div>
  )
}

export default Home
