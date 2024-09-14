import Image from "next/image";
import useState from 'react';
// import Head from "next/head";
import Card from "./Card.jsx";
import styles from "./page.module.css";
// import Results from "./results/page.jsx";
import brokenHeart from "./public/images/broken-heart-svgrepo-com.svg";

export default function Home() {
  function HandleClick() {
  }

  // the main page

  
  return (

    <><div className={styles.page}>
      <main className={styles.card}>

        {/* category options (hardcoded) */}
        {/*
        <div style={{width: '100%', height: '100%', paddingTop: 111, paddingBottom: 229, paddingLeft: 116, paddingRight: 116, background: 'linear-gradient(0deg, #90DBBC 0%, #90DBBC 100%), linear-gradient(160deg, rgba(0, 255, 255, 0) 0%, rgba(113.69, 187.17, 255, 0.18) 35%, rgba(0, 25.50, 255, 0.50) 100%)', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex'}}>
    <div style={{width: 502, height: 737, position: 'relative', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
        <div style={{width: 502, height: 737, position: 'relative'}}>
            <div style={{width: 502, height: 737, left: 0, top: 0, position: 'absolute', background: 'white', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 53}} />
            <div style={{width: 388, height: 102, left: 56, top: 46, position: 'absolute', color: 'black', fontSize: 35, fontFamily: 'Instrument Sans', fontWeight: '400', wordWrap: 'break-word'}}>Pick your top choice</div>
        </div>
         <div style={{width: 159, height: 88, position: 'relative'}}>
            
            <div style={{width: 101, height: 37, left: 29, top: 13, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 25, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Middle Eastern</div>
        </div>
        </div>

</div>
      */}
        <Card />
      </main>
      <footer className={styles.footer}>
        <div>Test</div>
      </footer>
    </div></>
  );
}
