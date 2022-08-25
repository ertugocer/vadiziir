import React from 'react'
import PricesCard from '../Component/Common/PricesCard';
import {
    Box,
    Grid
} from '@mui/material';
import '../styles/HomePage.css'

const Prices = () => {
    return (
        <Box className='priceCardBuild'>
            <Grid container spacing={4} justifyContent={'center'}>
                <Grid item xs="12" lg="4">
                    <PricesCard
                        packetHead="Havuz başı kır düğünü"
                        open="Teklifimizi görmek için tıklayınız."
                        concept="Havuz başı konseptimizde ortalama fiyatlardır. Daha detaylı bilgi ve görsel için iletişime geçiniz..! Tel: 0532 433 60 31"
                        mainfoot="serpme koktely İle :"
                        mainprice200="200 kişiye kadar toplam ücret: 12.000₺"
                        mainprice500="400 kişiye kadar toplam ücret: 20.000₺"
                        mainprice1000="600 kişiye kadar toplam ücret: 26.000₺"
                        hotfoot="kişiye özel menü ile :"
                        hotprice200="200 kişiye kadar toplam ücret: 13.000₺"
                        hotprice500="400 kişiye kadar toplam ücret: 22.000₺"
                        hotprice1000="600 kişiye kadar toplam ücret: 28.000₺"
                        cocktailfoot="kişiye özel menü ve canlı müzik İle :"
                        cocktailprice200="200 kişiye kadar toplam ücret: 15.000₺"
                        cocktailprice500="400 kişiye kadar toplam ücret: 24.000₺"
                        cocktailprice1000="600 kişiye kadar toplam ücret: 31.000₺"
                    />
                </Grid>
                <Grid item xs="12" lg="4">
                    <PricesCard
                        packetHead="Kır düğünü"
                        open="Teklifimizi görmek için tıklayınız."
                        concept="Kır salonumuz 300 kişiile sınırlıdır. Kır konseptimizde ortalama fiyatlardır. Daha detaylı bilgi ve görsel için iletişime geçiniz..! Tel: 0532 433 60 31"
                        mainfoot="serpme koktely İle :"
                        mainprice200="100 kişiye kadar toplam ücret: 8.000₺"
                        mainprice500="200-300 kişiye kadar toplam ücret: 10.000₺"
                        hotfoot="kişiye özel menü İle :"
                        hotprice200="100 kişiye kadar toplam ücret: 10.000₺"
                        hotprice500="200-300 kişiye kadar toplam ücret: 12.000₺"
                        cocktailfoot="kişiye özel menü ve canlı müzik İle :"
                        cocktailprice200="200 kişiye kadar toplam ücret: 12.000₺"
                        cocktailprice500="200-300 kişiye kadar toplam ücret: 14.000₺"
                    />
                </Grid>
                <Grid item xs="12" lg="4">
                    <PricesCard
                        packetHead="Kapalı salon düğünü"
                        open="Teklifimizi görmek için tıklayınız."
                        concept="Kapalı salon konseptimizde ortalama fiyatlardır. Daha detaylı bilgi ve görsel için iletişime geçiniz..! Tel: 0532 433 60 31"
                        mainfoot="serpme koktely İle :"
                        mainprice200="200 kişiye kadar toplam ücret: 11.000₺"
                        mainprice500="400 kişiye kadar toplam ücret: 17.000₺"
                        mainprice1000="600 kişiye kadar toplam ücret: 20.000₺"
                        hotfoot="kişiye özel menü İle :"
                        hotprice200="200 kişiye kadar toplam ücret: 12.000₺"
                        hotprice500="400 kişiye kadar toplam ücret: 19.000₺"
                        hotprice1000="600 kişiye kadar toplam ücret: 22.000₺"
                        cocktailfoot="kişiye özel menü ve canlı müzik İle :"
                        cocktailprice200="200 kişiye kadar toplam ücret: 14.000₺"
                        cocktailprice500="400 kişiye kadar toplam ücret: 20.000₺"
                        cocktailprice1000="600 kişiye kadar toplam ücret: 23.000₺"
                    />
                </Grid>
                <Grid item xs="12" lg="4">
                    <PricesCard
                        packetHead="Nikah ve evlilik teklifi"
                        open="Teklifimizi görmek için tıklayınız."
                        concept="Daha detaylı bilgi için arayınız..! Tel: 0532 433 60 31"
                        mainfoot="serpme koktely İle :"
                        hotfoot="kişiye özel menü İle :"
                        cocktailfoot="kişiye özel menü ve canlı müzik İle :"
                    />
                </Grid>
                <Grid item xs="12" lg="4">
                    <PricesCard
                        packetHead="Balo ve özel günleriniz için"
                        open="Teklifimizi görmek için tıklayınız."
                        concept="Daha detaylı bilgi için arayınız..! Tel: 0532 433 60 31"
                        mainfoot="serpme koktely İle :"
                        hotfoot="kişiye özel menü İle :"
                        cocktailfoot="kişiye özel menü ve canlı müzik İle :"
                    />
                </Grid>
            </Grid>
        </Box>
    )
}

export default Prices