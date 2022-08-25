import * as React from 'react';
import '../../styles/Prices.css'
import {
    Backdrop,
    Box,
    Modal,
    Fade,
    Card,
    Grid,
    Typography,
    Divider,
    IconButton
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close'
import '../../images/paketResim.png'

const style = {
    position: 'absolute',
    top: '700px',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '70%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    borderRadius: '20px',
    boxShadow: 24
};

export default function TransitionsModal(props) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <center>
                <Card onClick={handleOpen} sx={{ maxWidth: 334, backgroundColor: '#CDBBBB', boxShadow: '0px 6px 6px 3px rgba(0, 0, 0, 0.25)', borderRadius: '8px' }}>
                    <img
                        width={'300px'}
                        height='446px'
                        alt='...'
                        src={require('../../images/paketResim.png')}
                        style={{
                            borderRadius: '8px',
                            marginTop: '17px'
                        }}
                    />
                    <Grid container direction={'column'}>
                        <Grid xs="12" lg="12">
                            <Typography className='packetsHead'>
                                {props.packetHead}
                            </Typography>
                        </Grid>
                        <Grid xs="12" lg="12">
                            <Typography className='open'>
                                {props.open}
                            </Typography>
                        </Grid>
                    </Grid>
                </Card>
            </center>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 1000,
                }}
                sx={{
                    overflow: 'scroll',
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <IconButton onClick={() => handleClose()} sx={{ float: 'right' }}>
                            <CloseIcon sx={{ color: '#6C6666' }} fontSize="medium" />
                        </IconButton>
                        <Typography className='modalText'>
                            {props.concept}
                        </Typography>
                        <Divider />
                        <Typography className='modalPriceHead'>
                            {props.mainfoot}
                        </Typography>
                        <Typography className='modalPrice'>
                            {props.mainprice200}
                        </Typography>
                        <Typography className='modalPrice'>
                            {props.mainprice500}
                        </Typography>
                        <Typography className='modalPrice'>
                            {props.mainprice1000}
                        </Typography>
                        <Divider />
                        <Typography className='modalPriceHead'>
                            {props.hotfoot}
                        </Typography>
                        <Typography className='modalPrice'>
                            {props.hotprice200}
                        </Typography>
                        <Typography className='modalPrice'>
                            {props.hotprice500}
                        </Typography>
                        <Typography className='modalPrice'>
                            {props.hotprice1000}
                        </Typography>
                        <Divider />
                        <Typography className='modalPriceHead'>
                            {props.cocktailfoot}
                        </Typography>
                        <Typography className='modalPrice'>
                            {props.cocktailprice200}
                        </Typography>
                        <Typography className='modalPrice'>
                            {props.cocktailprice500}
                        </Typography>
                        <Typography className='modalPrice'>
                            {props.cocktailprice1000}
                        </Typography>
                    </Box>
                </Fade>
            </Modal>
        </>
    );
}
