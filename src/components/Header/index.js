import React from 'react';
import styles from '../styles.module.css'
import Container from '@material-ui/core/Container'
import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'

const Links = [
    {title: 'Case studies', href:'#'},
    {title: 'About', href:'#'},
    {title: 'Experiments', href:'#'},
]

function Header(){
    return (
        <Container className={styles.header_container}>
            <Typography variant="h6">Maya Nour Alah</Typography>
            <div>
                {
                    Links.map(function(currentValue){
                        return <Link href={currentValue.href} color="inherit" className={styles.header_Link}>{currentValue.title}</Link>
                    }).reduce((prev, curr) => [prev, ' / ', curr])
                }
            </div>
        </Container>
    )
}

export default Header;