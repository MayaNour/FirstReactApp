import React from 'react';
import styles from '../styles.module.css'
import Container from '@material-ui/core/Container'
import Link from '@material-ui/core/Link'

const Links = [
    {title: 'Email', href:'#'},
    {title: 'GitHub', href:'#'},
    {title: 'LinkedIn', href:'#'},
    {title: 'Facebook', href:'#'},
]

function Footer(){
    return (
            <footer className={styles.footer}>
                {
                    Links.map(function(currentValue){
                        return <Link 
                        href={currentValue.href} 
                        color="inherit" 
                        className={styles.header_Link}> {currentValue.title} </Link>
                    }).reduce((prev, curr) => [prev, ' / ', curr])
                }
            </footer>
    )
}

export default Footer;