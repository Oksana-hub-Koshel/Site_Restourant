import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";
import { Loading } from '../loadingComponent';
import { baseUrl } from '../../shared/baseUrl';


function RenderMenuItem({ dish }) {
    return (
        <Card key={dish.id}>
            <Link path to={`/menu/${dish.id}`}>
                <CardImg width="100%" src={baseUrl + dish.image} alt={dish.name} />
                <CardImgOverlay>
                    <CardTitle>{dish.name}</CardTitle>
                </CardImgOverlay>
            </Link>
        </Card>
    );
}

export const Menu = (props) => {
    const menu = props.dishes.dishes.map((dish) => {
        return (
            <div className="col-12 col-md-5 m-1" key={dish.id}>
                <RenderMenuItem dish={dish} />
            </div>
        );
    });

    if (props.isLoading) {
        return (
            <div className='container'>
                <div className='row'>
                    <Loading />
                </div>
            </div>
        )
    }
    else if (props.dishes.errMess) {
        return (
            <div className='container'>
                <div className='row'>
                    <h4>{props.dishes.errMess}</h4>
                </div>
            </div>
        )
    }

    else

        return (
            <div className="container">
                <div className="row">

                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Menu</BreadcrumbItem>
                    </Breadcrumb>
                    <br></br>
                    <br></br>

                    <div className="col">
                        <h3>Menu</h3>
                        <hr />
                        <br />
                    </div>

                </div>

                <div className="row">
                    {menu}
                </div>
            </div>
        );
}
export default Menu;







    //         {DISHES.map(dish => (

    //             <div key={dish.id} onClick={() => onDishClick(dish)}>
    //                 <RenderMenuItem dish={dish} />
    //             </div>

    //         ))}






    //     </>
    // )

