import React, {useState} from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
// import { Link } from 'gatsby';

// import placeholder from '../images/giphy.gif'
import placeholder from '../images/mountaindawn.jpg'


import '../stylesheets/infocard.sass'



const InfoCard = ({ image, name, minPrice, maxPrice, id, paypal, viewCallBack}) => {
    const [paymentButton,setPaymentButton] = useState()
    
    const prettyPayButton = (
    <Button variant="contained" className="grid-button" onClick={ () => { setPaymentButton(paypal)} }>
        Purchase Options
    </Button>)
    
    return (
        <Card className='card'>
            <CardMedia
                className='card-cover'
                image={image || placeholder}
                title={name || 'Coming soon....'}
            />
            <div className="card-details">
                <CardContent>
                    <div className="md-text blue-text">{name || 'Bacon pancake!'}</div>
                    <br/>
                    <div className="md-text">{`$${(minPrice && maxPrice && (minPrice + " to $" + maxPrice) )|| '--'}`}</div>
                </CardContent>
                <Grid container spacing={2}>
                    <Grid item style={{width: '100%'}}>
                        {image && 
                        <Button variant="contained" className="grid-button" onClick={() => { viewCallBack(image,name)}}>
                            View image
                        </Button>}
                    </Grid>
                    <Grid item style={{width: '100%'}}>
                        { paypal && (paymentButton || prettyPayButton)}
                    </Grid>
                </Grid>
            </div>
        </Card>
    )
}

export default InfoCard