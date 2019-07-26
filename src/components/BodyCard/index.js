import React from 'react';
import Link from '@material-ui/core/Link';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import styles from '../styles.module.css'
import Button from '@material-ui/core/Button';


class BodyCard extends React.Component{
    render(){
        let demoStyle;
        if(this.props.demo === "")
        {
            demoStyle = {display :'none'};
        }

        return (
                <Card className={styles.cardSection}>  
                    <CardMedia 
                        className={styles.media}
                        image= {this.props.imageURL}
                        title= {this.props.title}/>
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="h2">
                            {this.props.title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {this.props.paragraph}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button href={this.props.source} target="_blank">
                            SOURCE
                        </Button>
                        <Button style={demoStyle} href={this.props.demo} target="_blank">
                            DEMO
                        </Button>
                            {/* <Link href={this.props.source} target="_blank">
                                
                            </Link>
                        <Link href={this.props.demo} target="_blank">
                            DEMO
                        </Link> */}
                    
                    </CardActions>            
                </Card>
        )
    }
}

export default BodyCard;