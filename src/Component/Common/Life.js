/* eslint-disable react/style-prop-object */
import React from 'react';
import { 
    Container, 
    Grid, 
    Typography,
    CardMedia, 
    List,
    ListItem,
} from '@mui/material'
import '../../styles/HomePage.css';

const life = (props) => {
  return (
    <Container sx={{padding: '20px'}}>
    <Grid container direction={'row'} className='whoTextGrid'>
      <Grid lg="7" padding={'13px'}>
      <center>
      <List>
        <ListItem>Havuz Fiyatlarımız;</ListItem>
        <ListItem>HAVUZ iRTİBAT VE DETAYLI BİLGİ İÇİN TELEFON NUMARASI :  <a className='phonenumber' href='05054326464'> 0505 432 6464</a></ListItem>
        <ListItem>DÜĞÜN, BALO, NİŞAN FİYAT VE DETAYLI BİLGİ İÇİN :<a className='phonenumber' href=' 05324336031'>  0532 433 6031</a></ListItem>
        <ListItem sx={'font-weight:bold'}>Hafta içi (09:00-17:30):</ListItem>
        <ListItem>12 yaş ve üzeri 250₺</ListItem>
        <ListItem>6-11 yaş 200₺</ListItem>
        <ListItem>0-5 yaş 1 çocuk ücretsiz</ListItem>
        <ListItem sx={'font-weight:bold'}>Hafta Sonu ve Resmi Tatillerde (09:00-17:30):</ListItem>
        <ListItem>12 yaş ve üzeri: 300₺</ListItem>
        <ListItem>6-11 yaş: 250₺</ListItem>
        <ListItem>0-5 yaş 1 çocuk ücretsiz</ListItem>
        <Typography className='bone'>
          Havumuzda bone takılması sağlık bakanlığı tarafından zorunlu kılınmıştır bizim uygulamamız değildir.!!!Olmayanlar için satışımız mevcut.
          </Typography>
      </List>
      </center>
          <Typography className='whoText'>
          Biz Kimiz:
          <br /><br />
            Tesisimiz Sincan Yenikent Temelli  yolu girişinde yerleşim yerine 200 metre mesafede olup tarihi zogor köprüsü yanındadır. 503/504 otobüsleri ve dolmuşlar ile ulaşım sağlanmaktadır. Tesisimiz 30.000 metrekaredir. İçerisinde yüzme havuzu,kaydırak
            içerisinden geçen ovada şelaler ve binlerce ağaç ve gülle donatılmış, doğallığa önem verilmiş bir tesistir. Tesisimizde kır düğünü, havuzbaşı düğünü,
            çadırlı mekan düğünü, okul balosu, kır nikahı, toplu yemek ve benzeri organizasyonlar yapılmaktadır. Tesisimizde kafemiz vardır. Havuz müşterisine sürekli yiyeek ve içecek hizmeti sunmaktadır. Havuz müşterisi haricinde kahvaltı ve yemek için gelecek aile müşterisi randevu ile gelebilir.
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