import React from "react"
// import "../../components/Header/Header"
import styles from '../../asset/css/index.module.css'
// import Footer from '../../components/Footer/Footer'
function page() {
  return (

    <div className={styles.outerdiv}>
      <div className={styles.bubbles}>
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
      </div>
      <h6 className={styles.headingsec}>A crime management platform</h6>
      <h3 className={styles.heading}>WELCOME TO E-bureau</h3>

      <hr className={styles.horiBarFirst} />
      <button className={styles.circlebtn}></button>

      <hr className={styles.horiBarSecond} />

      <div className={styles.firstDiv}>
        <p>
          This is a E-platform which aims to help to make crime management easier.
          This includes general diary, crime reports and reporting of missing
          person.

        </p>
      </div>
      <button className={styles.firstBtn}>SignUp</button>
      <button className={styles.secondBtn}>Login</button>
      <img
        src="https://www.linkpicture.com/q/Data.png"
        className={styles.hackerimg}
        alt=""
      />


    </div>
  )
}
export default page;