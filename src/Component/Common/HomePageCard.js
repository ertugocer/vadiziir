import * as React from 'react';
import {
    Card,
    Typography,
    CardContent,
    CardMedia
} from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import '../../styles/HomePage.css'

export default function MediaCard(props) {
    return (
        <Card sx={{ maxWidth: 320, backgroundColor: '#CDBBBB', boxShadow: '0px 6px 6px 3px rgba(0, 0, 0, 0.25)', borderRadius: '8px' }}>
            <CardMedia
                component="img"
                height="173"
                image={props.image}
                alt="havuzbaşı"
                sx={{
                    width:'100%',
                }}
                
            />
            <CardContent>
                <Typography className='homePageCardHead'>
                    {props.concept}
                </Typography>
                <Typography className='homePageCardText'>
                    {props.text}
                </Typography>
            </CardContent>
                <ArrowForwardIosIcon sx={{
                    float:'right',
                    padding:'10px',
                    marginRight:'18px',
                    marginBottom:'10px',
                    color:'white'
                }} />
        </Card>
    );
}

