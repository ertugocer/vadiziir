import React from "react";
import {
    Grid,
    Link
} from '@mui/material'
import '../styles/HomePage.css';
import Life from '../Component/Common/Life';
import Card from '../Component/Common/HomePageCard'
import '../images/zir.png';

const home = () => {
    return (
        <Grid container direction={'column'} className='homePageBuild'>
            <Life
                image={require('../images/havuzsite.png')}
            />
            <Grid item alignItems='center'>
                <Grid container direction={'row'} spacin='3' justifyContent={'center'} alignItems={'center'}>
                    <Grid item xs="12" lg="4" className="cardGrid">
                        <center>
                            <Link href={'/aqua'} sx={{
                                textDecoration: 'none '
                            }}>
                                <Card
                                    image={require('../images/havuzsite.png')}
                                    yazı='/aqua'
                                    concept="Havuz&Aqua"
                                    text="Serinlemek ve günün sonuna kadar eğlenmek için daha neyi bekliyorsunuz?.."
                                />
                            </Link>
                        </center>
                    </Grid>
                    <Grid item lg="4" className="cardGrid">
                        <center>
                            <Link href={'/prices'} sx={{
                                textDecoration: 'none'
                            }}>
                                <Card
                                    image={require('../images/zir.png')}
                                    concept="Havuzbaşı kır düğünü"
                                    text="Düğünlerin gözdesi olan kır düğünü 
                               ile havuzun ferahlığında birleşen bir
                               konsept..."
                                />
                            </Link>
                        </center>
                    </Grid>
                    <Grid item lg="4" className="cardGrid">
                        <center>
                            <Link href={'/prices'} sx={{
                                textDecoration: 'none '
                            }}>
                                <Card
                                    image={require('../images/Kırdüğünü.jpeg')}
                                    concept="Kır düğünü"
                                    text="Ağaç ve kuş seslerinde huzur bulurken misafirlenizin mesth olacağı bir düğün konsepti."
                                />
                            </Link>
                        </center>
                    </Grid>
                    <Grid item lg="4" className="cardGrid">
                        <center>
                        <Link href={'/prices'} sx={{
                                textDecoration: 'none '
                            }}>
                            <Card
                                image={require('../images/kapalıSalon.jpeg')}
                                concept="Kapalı salon düğünü"
                                text="Üstü açılabilir tente ile bu 
                              salonumuzda kapalı salonların 
                              aksine daha ferah olan bir konsept."
                            />
                            </Link>
                        </center>
                    </Grid>
                    <Grid item lg="4" className="cardGrid">
                        <center>
                            <Link href={'/nikah'} sx={{
                                textDecoration: 'none '
                            }}>
                                <Card
                                    image={require('../images/NikahSalon.png')}
                                    concept="Nikah ve Balo"
                                    text="Üstü açılabilir tente ile bu 
                              salonumuzda kapalı salonların 
                              aksine daha ferah olan bir konsept."
                                />
                            </Link>
                        </center>
                    </Grid>
                    <Grid item lg="4" className="cardGrid">
                        <center>
                        <Link href={'/prices'} sx={{
                                textDecoration: 'none '
                            }}>
                            <Card
                                image={require('../images/HavuzBaşı.jpeg')}
                                concept="Okul Balo ve Organizasyon"
                                text="Üstü açılabilir tente ile bu 
                              salonumuzda kapalı salonların 
                              aksine daha ferah olan bir konsept."
                            />
                            </Link>
                        </center>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )

}

export default home;