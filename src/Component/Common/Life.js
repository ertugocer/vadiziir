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
    <Grid container direction={'row'} className='whoTextGrid'>
      <Grid lg="7" padding={'13px'}>
          <Typography className='whoText'>
          Biz Kimiz:
          <br /><br />
            Tesisimiz Sincan Yenikent Temelli  yolu girişinde yerleşim yerine 200 metre mesafede olup tarihi zogor köprüsü yanındadır. 503/504 otobüsleri ve dolmuşlar ile ulaşım sağlanmaktadır. Tesisimiz 30.000 metrekaredir. İçerisinde yüzme havuzu,kaydırak
            içerisinden geçen ovada şelaler ve binlerce ağaç ve gülle donatılmış, doğallığa önem verilmiş bir tesistir. Tesisimizde kır düğünü, havuzbaşı düğünü,
            çadırlı mekan düğünü, okul balosu, kır nikahı, toplu yemek ve benzeri organizasyonlar yapılmaktadır. Tesisimizde kafemiz vardır. Havuz müşterisine sürekli yiyeek ve içecek hizmeti sunmaktadır. Havuz müşterisi haricinde kahvaltı ve yemek için gelecek aile müşterisi randevu ile gelebilir.
          </Typography>
          <Typography className='bone'>
          Havumuzda bone takılması sağlık bakanlığı tarafından zorunlu kılınmıştır.!!! Bonenizi unutmayın. Olmayanlar için satışımız mevcut.
          </Typography>
      </Grid>
      <Grid lg="4.8">
          <CardMedia 
          component="img"
          height="90%"
          alt='zir'
          image={props.image}
          sx={{
              marginTop:'15px',
              borderRadius: '20px'
          }}
          />
      </Grid>
    </Grid>
</Container>
  )
}

export default life;