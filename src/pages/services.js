import React from 'react'
import {
    Grid,
    Typography,
    Box
} from '@mui/material'
import '../App.css'

const services = () => {
    return (
        <>
            <Grid container className='servicesBody'>
                <Grid item xs="12" lg="12">
                    <Typography className='servicesText'>
                        3 Farklı düğün seçeneği ve Aqua havuzuyla sizlere hizmet vermekteyiz.
                        Aile şirketi olan bu kuruluşumuz 2015’den bu yana tesisimizde bir çok müşteri ağırladı.
                        Düğünlerin gözdesi olan havuz başı kır düğünü diğer düğün salonlarından daha çok misafir kapasitesine sahip.
                        Toplam 1.500 kişiye kadar misafirlerinizi ağırlayabiliriz.
                        Üstü açılabilir çadır salonumuz ile kapalı düğün salonlarından daha ferah.
                        Kapasitesi 1.000 kişi olan düğün salonumuzda rahatça eğlenebilirsiniz.
                        Kır düğünü ile sizleri adeta masallarda hissettiren en güzel gününüzde herşey rahatlığınız için.
                        500 kişiye kadar olan salonumuzda misafirlerinizi söğüt ve iğde ağaçlarının ferahlığında adeta mesth ediyor.
                        Uzman kadromuz ile her zaman hizmetinizdeyiz. Aqua ve yarı olimpik havuzumuzda uzmanlar tarafından sürekli kontral altında
                        olmakla birlikte aileniz ile rahatça eğlenebilmeniz için dizayn edilmiştir. Tesisimiz alkolsüzdür. Ailelerinizle rahatça gelebilirsiniz.
                        Kafeteryamızda ki bol menü ile havuzda yüzerken aç kalmanız mümkün değil. Eğitimli yüzme hocamız ile herhangi bir durumda, anında müdehale
                        ile sizlere yardımcı olmakta.
                    </Typography>
                </Grid>
                <Grid item xs="12" lg="12">
                    <Grid container direction={'row'} padding='77px 0 20px 0 '>
                        <Grid xs="12" sm="4" md="3" lg="2.4">
                            <Box className='servicesImage'>
                                <img
                                    alt='...'
                                    src={require('../images/zir2.jpeg')}
                                    style={{
                                        width: '100%',
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
                                    src={require('../images/zir6.jpeg')}
                                    style={{
                                        width: '100%',
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
                                    src={require('../images/zir.png')}
                                    style={{
                                        width: '100%',
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
                                    src={require('../images/zir5.jpeg')}
                                    style={{
                                        width: '100%',
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
                                    src={require('../images/havuzsite.png')}
                                    style={{
                                        width: '100%',
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
                                    src={require('../images/kapalıSalon.jpeg')}
                                    style={{
                                        width: '100%',
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
                                    src={require('../images/taraca2.jpeg')}
                                    style={{
                                        width: '100%',
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
                                    src={require('../images/taraca4.jpeg')}
                                    style={{
                                        width: '100%',
                                        borderRadius: '8px',
                                        height: '15rem'
                                    }}
                                />
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default services