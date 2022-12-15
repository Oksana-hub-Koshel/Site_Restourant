import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Image} from "react-bootstrap";
import img1 from "./../../shared/image/buffet.png"

const bull = (
    <Box
        component="span"
        sx={{display: 'inline-block', mx: '2px', transform: 'scale(0.8)'}}
    >
        •
    </Box>
);

const card = (
    <>
        <CardContent>
            <Typography sx={{fontSize: 18, margin: 1}} color="text.secondary" gutterBottom>
                Special offer today
            </Typography>
            <Image src={img1} style={{width: 360, height: 300}}></Image>
            <Typography variant="h6" component="div" style={{marginTop: 10}}>
                Pappardelle with California Walnut Pesto
            </Typography>
            <Typography sx={{mb: 1.5}} color="text.secondary">
                adjective
            </Typography>
            <Typography variant="body2">
                well meaning and kindly.
                <br/>
                {'"a benevolent smile"'}
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small">Learn More</Button>
        </CardActions>
    </>
);

const Offers = () => {
    return (
        <div>
            <Box sx={{width: 400}} style={{margin: 40}}>
                <Card variant="outlined">{card}</Card>
            </Box>
        </div>
    );
};

export default Offers;