import React from 'react';
import styles from './components/styles.module.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Body from './components/Body'
import Container from '@material-ui/core/Container';


function App() {
  return (<Container maxWidth="lg" className={styles.mainDiv}>
    <Header/>
    <Body/>
    <Footer/>
  </Container>)
}

export default App;
