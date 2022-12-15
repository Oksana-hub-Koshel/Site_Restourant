import React from "react";
import {Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle} from 'reactstrap';
import {Loading} from "../../components/loadingComponent";
import {baseUrl} from '../../shared/baseUrl';
import {FadeTransform} from 'react-animation-components';
import s from './HomeComponent.module.css';
import img1 from "./../../shared/image/buffet.png"
import img2 from "./../../shared/image/alberto.png"
import img3 from "./../../shared/image/vadonut.png"
import {Link} from "react-router-dom";


function RenderCard({image, name, description, designation, isLoading, errMess}) {

    if (isLoading) {
        return (
            <Loading/>
        )
    } else if (errMess) {
        return (
            <h4>{errMess}</h4>
        )
    } else
        return (
            <FadeTransform in transformProps={{
                exitTransform: 'scale(0.5) translateY(-50%)'
            }}>

                <Card>
                    <CardImg src={image} alt={name}/>
                    <CardBody className={s.card}>
                        <CardTitle>{name}</CardTitle>
                        {designation ? <CardSubtitle>{designation}</CardSubtitle> : null}
                        <CardText>{description}</CardText>
                    </CardBody>
                </Card>

            </FadeTransform>
        );
}

export const Home = (props) => {
    console.log(props)
    return (
        <div className="container" style={{marginBottom: 20, marginTop: 20}}>
            <div className="row align-items-start home-cards">
                <div className="col-12 col-md m-1 ">
                    <Link to="/offers">
                        <RenderCard name="Buffet"
                                    image={img1}
                                    description="Promotional offers and meals with special price "
                                    isLoading={props.dishesLoading}
                                    errMess={props.dishesErrMess}/>
                    </Link>
                </div>
                <div className="col-12 col-md m-1">
                    <Link to="/menu">
                        <RenderCard name="Vadonut"
                                    image={img3}
                                    description="Gourmet cuisine"
                                    isLoading={props.promosLoading}
                                    errMess={props.promosErrMess}/>
                    </Link>
                </div>
                <div className="col-12 col-md m-1 ">
                    <Link to="/aboutus">
                        <RenderCard name="Oksana Koshel"
                                    designation="Head Cheif"
                                    image={img2}
                                    description="Our inspiration is your smile after our meals"
                                    isLoading={props.leadersLoading}
                                    errMess={props.leadersErrMess}
                        />
                    </Link>
                </div>

            </div>
        </div>
    )
}