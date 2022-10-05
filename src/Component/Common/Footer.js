import React from 'react'
import { Grid, Typography } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import PhoneRoundedIcon from '@mui/icons-material/PhoneRounded';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import '../../App.css'


const Footer = () => {
  return (
      <Grid container direction={'row'} className='footerBackground'>
        <Grid xs="8" lg="10">
          <Typography className='footerCopyright'>
            Copyright © 2022 - VADİZİİR.COM Sitede Kullanılan Tüm Görseller vadizir.com'a aittir.İzinsiz Kullanılamaz. Raptors SOFTWARE
          </Typography>
        </Grid>
        <Grid xs="4" lg="2" className='footerIcon'>
        
            <InstagramIcon sx={{
              padding: '0px 15px 0px 0px',
            }} />

            <FacebookOutlinedIcon sx={{
              padding: '0px 15px 0px 0px',
            }} />

            <PhoneRoundedIcon sx={{
              padding: '0px 15px 0px 0px',
            }} />

            <MailOutlineOutlinedIcon sx={{
              padding: '0px 15px 0px 0px',
            }} />

        </Grid>
      </Grid>
  )
}

export default Footer