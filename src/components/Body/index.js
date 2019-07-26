import React from 'react';
import Grid from '@material-ui/core/Grid';
import BodyCard from '../BodyCard'
import styles from '../styles.module.css'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link';


const Cards = [
  {title: "Zetsy", 
   imageURL: "https://curriculum-content.s3.amazonaws.com/fewds-css/fe-zetsy-complete.jpg",
   paragraph: "Jewelry page made with Html and Css.",
   source: "https://github.com/MayaNour/fe-zetsy-re-coded-gaziantep-2019",
   demo: "http://learn-co-curriculum.github.io/fe-zetsy/"},
  {title: "Javascript Objects", 
  imageURL: "https://mathiasbynens.be/_img/js-engines/object-model.svg",
  paragraph: "The concepts of Objects in JavaScript.",
  source: "https://github.com/MayaNour/js-data-structures-objects-lab-re-coded-gaziantep-2019",
  demo: ""},
  {title: "Dynamic Components", 
  imageURL: "https://www.kirupa.com/react/images/two_properties_144.png",
  paragraph: "Dynamic Components using props",
  source: "https://github.com/MayaNour/react-dynamic-components-lab-re-coded-gaziantep-2019",
  demo: ""},
]

class Body extends React.Component{
    render(){
        return (
          <div className={styles.body_container}>
          <div className={styles.name}>
            <Typography gutterBottom variant="h4">Hi I'm Maya.</Typography>
            <Typography variant="body1"><Link className={styles.header_Link} color="inherit" href="https://github.com/MayaNour" target="_blank">More about me</Link></Typography>
            </div>
            <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="stretch"
            spacing={2}>
            {
              Cards.map(function(currentValue){
                return (<Grid item xs={12} sm={4} md={3}>
                  <BodyCard 
                  imageURL={currentValue.imageURL}
                  title={currentValue.title} 
                  paragraph={currentValue.paragraph} 
                  source={currentValue.source}
                  demo={currentValue.demo}/>
                </Grid>)
              })
            }
              {/* <Grid item xs={12} sm={4} md={3}>
                <BodyCard 
                imageURL="https://curriculum-content.s3.amazonaws.com/fewds-css/fe-zetsy-complete.jpg" 
                title="Zetsy" 
                paragraph="Jewelry page made with Html and Css." 
                source="https://github.com/MayaNour/fe-zetsy-re-coded-gaziantep-2019"
                demo="http://learn-co-curriculum.github.io/fe-zetsy/"/>
              </Grid>
              <Grid item xs={12} sm={4} md={3}>
                <BodyCard 
                imageURL="https://mathiasbynens.be/_img/js-engines/object-model.svg" 
                title="Javascript Objects" 
                paragraph="The concepts of Objects in JavaScript." 
                source="https://github.com/MayaNour/js-data-structures-objects-lab-re-coded-gaziantep-2019"/>
              </Grid>
              <Grid item xs={12} sm={4} md={3}>
                <BodyCard 
                imageURL="https://www.kirupa.com/react/images/two_properties_144.png" 
                title="Dynamic Components" 
                paragraph="Dynamic Components using props" 
                source="https://github.com/MayaNour/react-dynamic-components-lab-re-coded-gaziantep-2019"/>
              </Grid> */}
          </Grid>
          </div>
        )
    }
}

export default Body;