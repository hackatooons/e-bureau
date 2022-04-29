import React from "react"
import styles from '../asset/css/index.module.css'
import Navbar from "../components/Navbar/Navbar"
import Footer from '../components/Footer/Footer'
import Home from "../components/Home/Home"
import Services from "../components/Servies/Services"
function page() {
  return (
    
<div>
  <Navbar />
    <div className={styles.outerdiv}>
   
      {/* <div className={styles.bubbles}>
        <div className={styles.bubble}></div>
        <div className={styles.bubble}></div>
        <div className={styles.bubble}></div>
        <div className={styles.bubble}></div>
        <div className={styles.bubble}></div>
        <div className={styles.bubble}></div>
        <div className={styles.bubble}></div>
        <div className={styles.bubble}></div>
        <div className={styles.bubble}></div>
        <div className={styles.bubble}></div>
        <div className={styles.bubble}></div>
        <div className={styles.bubble}></div>
        <div className={styles.bubble}></div>
        <div className={styles.bubble}></div>
        <div className={styles.bubble}></div>
      </div> */}

      <Home />
      <Services />
      <Footer/>


    </div>
    </div>
  )
}
export default page;