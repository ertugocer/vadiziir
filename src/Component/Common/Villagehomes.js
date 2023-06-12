import React from 'react';
import { 
    Container, 
    Grid, 
    Typography,
    CardMedia
} from '@mui/material'
import '../../styles/HomePage.css';

const life = (props) => {
  return (
    <Container sx={{padding: '20px'}}>
    <Grid container direction={'column'} className='whoTextGrid'>
      <Grid lg="12" padding={'13px'}>
        <center>
          <Typography className='whoText'>
            Tesisimiz Sincan Yenikent Temelli  yolu girişinde yerleşim yerine 200 metre mesafede olup tarihi zogor köprüsü yanındadır. 503/504 otobüsleri ve dolmuşlar ile ulaşım sağlanmaktadır. Tesisimiz 30.000 metrekaredir. İçerisinde yüzme havuzu,kaydırak
            içerisinden geçen ovada şelaler ve binlerce ağaç ve gülle donatılmış, doğallığa önem verilmiş bir tesistir. Tesisimizde kır düğünü, havuzbaşı düğünü,
            çadırlı mekan düğünü, okul balosu, kır nikahı, toplu yemek ve benzeri organizasyonlar yapılmaktadır. Tesisimizde kafemiz vardır. Havuz müşterisine sürekli yiyeek ve içecek hizmeti sunmaktadır. Havuz müşterisi haricinde kahvaltı ve yemek için gelecek aile müşterisi randevu ile gelebilir.
          </Typography>
          </center>
      </Grid>
      <Grid lg="4">
          <CardMedia 
          component="img"
          alt='taraça'
          image={props.image}
          sx={{
              borderRadius: '20px'
          }}
          />
      </Grid>
    </Grid>
</Container>
  )
}

export default life;