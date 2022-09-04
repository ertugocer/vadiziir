import { Grid, Typography, Box } from '@mui/material'
import React from 'react'
import '../images/zir2.jpeg'
import '../App.css'
const aqua = () => {
    return (
        <>
            <Grid container direction={'row'} sx={{ backgroundColor: '#DED6D6', minHeight: '742px' }}>
                <Grid item xs="12" sm="12" lg="6">
                    <Grid container direction={'row'}>
                        <Grid item xs="12" sm="12" lg="4">
                            <center>
                                <Box sx={{ padding: '18px' }}>
                                    <img
                                        alt='...'
                                        src={require('../images/zir2.jpeg')}
                                        style={{
                                            width: '100%',
                                            borderRadius: '8px'
                                        }}
                                    />
                                </Box>
                            </center>
                        </Grid>
                        <Grid item xs="12" sm="12" lg="8">
                            <center>
                                <Box sx={{ padding: '18px' }}>
                                    <img
                                        alt='...'
                                        src={require('../images/zir.png')}
                                        style={{
                                            width: '100%',
                                            borderRadius: '8px'
                                        }}
                                    />
                                </Box>
                            </center>
                        </Grid>
                        <Grid item xs="12" sm="12" lg="8">
                            <center>
                                <Box sx={{ padding: '18px' }}>
                                    <img
                                        alt='...'
                                        src={require('../images/havuzsite.png')}
                                        style={{
                                            width: '100%',
                                            borderRadius: '8px'
                                        }}
                                    />
                                </Box>
                            </center>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs="12" sm="12" lg="6">
                    <Grid container direction={'column'} padding="10px" marginTop={'30px'}>
                        <Grid xs="12">
                            <Typography className='aquaText'>
                                <h3>
                                    Lütfen Yüzme havuzu Ziyaretinizden önce açıklamayı okuyunuz.
                                </h3>
                                Tesisimizin Yüzme Havuzu ve Aquapark Konsepti her yıl 20 mayıs - 1 ekim tarihleri arasında 10:00 -18:00 saatleri arasında hizmetinizdedir. (Düğün günlerinde hizmet bitişi 17:30 'dur)
                                Tesisimize Partnersiz Baylar ,Partnersiz çocuklu Baylar ,hiçbir şekilde kabul edilmez. İstisnai durum söz konusu değildir. 
                                Yüzme Havuzu konseptinden faydalanacak olan tüm misafirlerimizin ,Havuz kıyafeti (Paraşüt kumaşlı Bikini ,Mayo,Şort ,Haşema ve BONE) ile katılımı zorunludur. Kıyafetsiz ve bonesiz havuz alanı dahi kullandırılmaz.
                                Yüzme Havuzu Misafirlerimizin dışarıdan yiyecek içecek getirmesi yasaktır . (Çocuk maması ve engelli misafirlerimizin yiyecekleri istisna kabul edilebilir.
                                Yüzme havuzuna katılım yapan 0-4 yaş arası çocuklu misafirlerimizin çocuklarına ,Sağlık bakanlığı kuralları uyarınca 5x5 bebek havuzunun haricinde kullandırmaları yasaktır .
                                0-4 yaş için mayo bezi kullanmaları zorunludur.
                            </Typography>
                            <Typography className='bone'>
                                Havumuzda bone takılması sağlık bakanlığı tarafından zorunlu kılınmıştır.!!! Bonenizi unutmayınız. Olmayanlar için satışımız mevcut.
                            </Typography>
                        </Grid>
                        <Grid xs="12" lg="12">
                            <center>
                                <br /><br /><br /><br /><br /><br />
                                <Typography className='aquaText'>Hafta İçi (09:00-17:30):</Typography>
                                <Typography className='aquaText'>Yetişkin: 100₺</Typography>
                                <Typography className='aquaText'>0-5 yaş 1 çocuk ücretsiz 6-12 yaş: 80₺</Typography>
                                <br /><br /><br />
                                <Typography className='aquaText'>Hafta Sonu  ve Resmi Tatillerde(09:00-17:30):</Typography>
                                <Typography className='aquaText'>Yetişkin: 120₺</Typography>
                                <Typography className='aquaText'>0-5 yaş 1 çocuk ücretsiz 6-12 yaş: 80₺</Typography>
                                <br /><br /><br /><br /><br />
                            </center>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default aqua