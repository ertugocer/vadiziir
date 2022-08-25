import React from 'react'
import {
  Grid,
  Typography,
  Box,
  Divider,
} from '@mui/material'
import '../../App.css'

const services = (props) => {
  return (
    <>
    <Box bgcolor={'#DED6D6'}>
      <Grid container direction={'row'} paddingLeft="22px">
        <Grid xs="12" sm="4" md="3" lg="2.4">
          <Box className='servicesImage'>
            <img
              alt='...'
              src={require('../../images/zir2.jpeg')}
              style={{
                width: '90%',
                borderRadius: '8px',
                height: '15rem'
              }}
            />
          </Box>
        </Grid>
        <Grid xs="12" sm="4" md="3" lg="2.4">
          <Box className='servicesImage'>
            <img
              alt='...'
              src={require('../../images/zir5.jpeg')}
              style={{
                width: '90%',
                borderRadius: '8px',
                height: '15rem'
              }}
            />
          </Box>
        </Grid>
        <Grid xs="12" sm="4" md="3" lg="2.4">
          <Box className='servicesImage'>
            <img
              alt='...'
              src={require('../../images/zir.png')}
              style={{
                width: '90%',
                borderRadius: '8px',
                height: '15rem'
              }}
            />
          </Box>
        </Grid>
        <Grid xs="12" sm="4" md="3" lg="2.4">
          <Box className='servicesImage'>
            <img
              alt='...'
              src={require('../../images/zir6.jpeg')}
              style={{
                width: '90%',
                borderRadius: '8px',
                height: '15rem'
              }}
            />
          </Box>
        </Grid>
        <Grid xs="12" sm="4" md="3" lg="2.4">
          <Box className='servicesImage'>
            <img
              alt='...'
              src={require('../../images/zir5.jpeg')}
              style={{
                width: '90%',
                borderRadius: '8px',
                height: '15rem'
              }}
            />
          </Box>
        </Grid>
      </Grid>
      <Grid item xs="12" lg="12">
        <Divider />
        <Typography className='cardPageConcept'>
          {props.text}
        </Typography>
      </Grid>
      <Divider />
      <Grid container direction={'row'} textAlign='center' alignItems={'center'} justifyContent={'center'}>
        <Grid xs='8' lg='7'>
        <Typography className='cardPageText'>{props.one100}</Typography>
        </Grid>
        <Grid xs='4' lg='1'>
        <Typography className='cardPagePrice'>{props.one100price}</Typography>
        </Grid>
        <Grid xs='8' lg='7'>
        <Typography className='cardPageText'>{props.two100}</Typography>
        </Grid>
        <Grid xs='4' lg='1'>
        <Typography className='cardPagePrice'>{props.two100price}</Typography>
        </Grid>
        <Grid xs='8' lg='7' paddingBottom={'40px'}>
        <Typography className='cardPageText'>{props.three100}</Typography>
        </Grid>
        <Grid xs='4' lg='1' paddingBottom={'40px'}>
        <Typography className='cardPagePrice'>{props.three100price}</Typography>
        </Grid>
        <Grid xs='8' lg='7'>
        <Typography className='cardPageText'>{props.one200}</Typography>
        </Grid>
        <Grid xs='4' lg='1'>
        <Typography className='cardPagePrice'>{props.one200price}</Typography>
        </Grid>
        <Grid xs='8' lg='7'>
        <Typography className='cardPageText'>{props.two200}</Typography>
        </Grid>
        <Grid xs='4' lg='1'>
        <Typography className='cardPagePrice'>{props.two200price}</Typography>
        </Grid>
        <Grid xs='8' lg='7' paddingBottom={'40px'}>
        <Typography className='cardPageText'>{props.three200}</Typography>
        </Grid>
        <Grid xs='4' lg='1' paddingBottom={'40px'}>
        <Typography className='cardPagePrice'>{props.three200price}</Typography>
        </Grid>
        <Grid xs='8' lg='7'>
        <Typography className='cardPageText'>{props.one300}</Typography>
        </Grid>
        <Grid xs='4' lg='1'>
        <Typography className='cardPagePrice'>{props.one300price}</Typography>
        </Grid>
        <Grid xs='8' lg='7'>
        <Typography className='cardPageText'>{props.two300}</Typography>
        </Grid>
        <Grid xs='4' lg='1'>
        <Typography className='cardPagePrice'>{props.two300price}</Typography>
        </Grid>
        <Grid xs='8' lg='7' paddingBottom={'40px'}>
        <Typography className='cardPageText'>{props.three300}</Typography>
        </Grid>
        <Grid xs='4' lg='1' paddingBottom={'40px'}>
        <Typography className='cardPagePrice'>{props.three300price}</Typography>
        </Grid>
        <Grid xs='8' lg='7'>
        <Typography className='cardPageText'>{props.one400}</Typography>
        </Grid>
        <Grid xs='4' lg='1'>
        <Typography className='cardPagePrice'>{props.one400price}</Typography>
        </Grid>
        <Grid xs='8' lg='7'>
        <Typography className='cardPageText'>{props.two400}</Typography>
        </Grid>
        <Grid xs='4' lg='1'>
        <Typography className='cardPagePrice'>{props.two400price}</Typography>
        </Grid>
        <Grid xs='8' lg='7' paddingBottom={'40px'}>
        <Typography className='cardPageText'>{props.three400}</Typography>
        </Grid>
        <Grid xs='4' lg='1' paddingBottom={'40px'}>
        <Typography className='cardPagePrice'>{props.three400price}</Typography>
        </Grid>
        <Grid xs='8' lg='7'>
        <Typography className='cardPageText'>{props.one500}</Typography>
        </Grid>
        <Grid xs='4' lg='1'>
        <Typography className='cardPagePrice'>{props.one500price}</Typography>
        </Grid>
        <Grid xs='8' lg='7'>
        <Typography className='cardPageText'>{props.two500}</Typography>
        </Grid>
        <Grid xs='4' lg='1'>
        <Typography className='cardPagePrice'>{props.two500price}</Typography>
        </Grid>
        <Grid xs='8' lg='7' paddingBottom={'40px'}>
        <Typography className='cardPageText'>{props.three500}</Typography>
        </Grid>
        <Grid xs='4' lg='1' paddingBottom={'40px'}>
        <Typography className='cardPagePrice'>{props.three500price}</Typography>
        </Grid>
        <Grid xs='8' lg='7'>
        <Typography className='cardPageText'>{props.one600}</Typography>
        </Grid>
        <Grid xs='4' lg='1'>
        <Typography className='cardPagePrice'>{props.one600price}</Typography>
        </Grid>
        <Grid xs='8' lg='7'>
        <Typography className='cardPageText'>{props.two600}</Typography>
        </Grid>
        <Grid xs='4' lg='1'>
        <Typography className='cardPagePrice'>{props.two600price}</Typography>
        </Grid>
        <Grid xs='8' lg='7' paddingBottom={'20px'}>
        <Typography className='cardPageText'>{props.three600}</Typography>
        </Grid>
        <Grid xs='4' lg='1' paddingBottom={'20px'}>
        <Typography className='cardPagePrice'>{props.three600price}</Typography>
        </Grid>
        <Grid xs='10' lg='12' paddingBottom={'20px'}>
        <Typography className='cardPagePrice'>{props.txt}</Typography>
        </Grid>
      </Grid>
      </Box>
    </>
  )
}

export default services