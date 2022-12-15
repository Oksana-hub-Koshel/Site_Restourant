import {CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem} from "reactstrap";
import {Link} from "react-router-dom";
import {Loading} from '../../components/loadingComponent';
import {baseUrl} from '../../shared/baseUrl';
import {useEffect, useState} from "react";
import axios from "axios";
import s from "./menu.module.css";
import * as React from 'react';
import {styled} from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, {IconButtonProps} from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import {red} from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';


//
// function RenderMenuItem({product}) {
//
//     return (
// <Card key={product.id}>
//     <Link path to={`/menu/${product.id}`}>
//         <CardImg width="100%" src={product.image} alt={product.name}/>
//         <CardImgOverlay>
//             <CardTitle style={{position: "relative"}}>{product.title}</CardTitle>
//         </CardImgOverlay>
//     </Link>
// </Card>


const ExpandMore = styled((props) => {
    const {expand, ...other} = props;
    return <IconButton {...other} />;
})(({theme, expand}) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

function RenderMenuItem({product}) {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (

        <Card className={s.cards}>
            <CardHeader
                avatar={
                    <Avatar sx={{bgcolor: red[500]}} aria-label="recipe">
                        R
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon/>

                    </IconButton>
                }
                title={product.title}
                subheader={product.rating.rate}>
            </CardHeader>
            <div
                className={s.img}
                // image={product.image}
                alt="Cloth img"
                style={{backgroundImage: `url( ${product.image})`}}

            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {product.description}
                </Typography>
            </CardContent>
            <CardActions disableSpacing className={s.actions}>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon/>
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon/>
                </IconButton>
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon/>
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph>Method:</Typography>
                    <Typography paragraph>
                        Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
                        aside for 10 minutes.
                    </Typography>
                    <Typography paragraph>
                        Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
                        medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
                        occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a

                    </Typography>
                    <Typography>
                        Set aside off of the heat to let rest for 10 minutes, and then serve.
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
}


export const Menu = (props) => {
    const [products, setProducts] = useState([])
    console.log(products)

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products?limit=10').then(response => {
            setProducts(response.data);
        });
    }, [])

    const menu = products.map((product) => {
        return (

            <div key={product.id} className={s.card}>
                <RenderMenuItem product={product}/>
            </div>
        );
    });

    if (props.isLoading) {
        return (
            <div className='container'>
                <div className='row'>
                    <Loading/>
                </div>
            </div>
        )
    } else if (props.dishes.errMess) {
        return (
            <div className='container'>
                <div className='row'>
                    <h4>{props.dishes.errMess}</h4>
                </div>
            </div>
        )
    } else

        return (
            <div className={s.container}>
                <div className="row">

                    <Breadcrumb style={{marginTop: 20}}>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Menu</BreadcrumbItem>
                    </Breadcrumb>
                    <br></br>
                    <br></br>

                    <div className="col">
                        <h3>Products</h3>
                        <hr/>
                        <br/>
                    </div>

                </div>

                <div className={s.menu_wrapp}>
                    {menu}
                </div>
            </div>
        );
}
export default Menu;



