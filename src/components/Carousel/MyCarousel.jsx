import { Container, Grid } from '@material-ui/core';
import { Carousel } from 'react-responsive-carousel';
import './custom.css'; // requires a loader
import useStyles from './styles';

const MyCarousel = () => {
    const classes = useStyles();
    //
    return (
        <Container maxWidth="md" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '2px' }}>
            <Grid className={classes.mainGrid} container justify="center" alignItems="center" spacing={3}>

                <Carousel thumbWidth={50} width='100%' autoPlay interval={2000} infiniteLoop stopOnHover={false} >
                    <div>
                        <img src="ca6.jpg" alt="img" />
                        <p className="legend">Young attractive smilling student showing thumb up outdoors campus university</p>
                    </div>
                    <div>
                        <img src="ca7.jpg" alt="img" />
                        <p className="legend">Interested dark haired girl wears casual attire chilling park near university using laptop</p>
                    </div>
                    <div>
                        <img src="ca2.jpg" alt='img' />
                        <p className="legend">Female real estate agent giving keys excited couple</p>
                    </div>
                    <div>
                        <img src="ca1.jpg" alt='img' />
                        <p className="legend">Modern studio apartment design with bedroom living space</p>
                    </div>
                    <div>
                        <img src="ca3.jpg" alt='img' />
                        <p className="legend">Small hotel bedroom with white walls panoramic window</p>
                    </div>
                    <div>
                        <img src="ca4.jpg" alt="img" />
                        <p className="legend">Online communication</p>
                    </div>
                    <div>
                        <img src="ca5.jpg" alt="img" />
                        <p className="legend">Beautiful day campus</p>
                    </div>
                </Carousel>
            </Grid>
        </Container>
    )
}

export default MyCarousel;