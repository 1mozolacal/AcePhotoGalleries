import React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import placeholder from '../images/giphy.gif'

import '../stylesheets/infocard.sass'



const InfoCard = ({ image, name, price }) => {

    return (
        <Card className='card'>
            <CardMedia
                className='card-cover'
                image={image || placeholder}
                title={name || 'Bacon pancake!'}
            />
            <div className="card-details">
                <CardContent>
                    <div className="md-text blue-text">{name || 'Bacon pancake!'}</div>
                    <br/>
                    <div className="md-text">{`${price || '--'}$`}</div>
                </CardContent>
                <Grid container spacing={2}>
                    <Grid item style={{width: '100%'}}>
                        <Button variant="contained" className="grid-button">
                            View image
                        </Button>
                    </Grid>
                    <Grid item style={{width: '100%'}}>
                        <Button variant="contained" className="grid-button">
                            Purchase
                        </Button>
                    </Grid>
                </Grid>
            </div>
        </Card>
    )
}

export default InfoCard