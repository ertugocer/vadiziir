import { 
    Container,
    Grid,
    Typography
 } from '@mui/material'
 import '../App.css'
import React from 'react'

const contact = () => {
  return (
    <Container className='contactBody'>
    <center>
        <Grid item xs="12" lg="12">
            <Typography className='contactHead'>
            VADİZİR Düğün Salonu, Havuzbaşı Kır Düğünü, Kokteyl ve Organizasyon
            </Typography>
        </Grid>
        <Grid item xs="12" lg="12">
            <Typography className='contact'>
            İletişim Bilgilerimiz:
            </Typography>
        </Grid>
        <Grid item xs="12" lg="12">
            <Typography className='contactText'>
            Adresimiz: Zirvadisi Yenikent Temelli Yolu Tarihi Taş Köprü Yanı Numara:1 Yenikent- Sincan / ANKARA
            </Typography>
        </Grid>
        <Grid item xs="12" lg="12">
            <Typography className='contactText'>
            Cep Telefonu: 0532 433 60 31
            </Typography>
        </Grid>
        </center>
    </Container>
  )
}

export default contact