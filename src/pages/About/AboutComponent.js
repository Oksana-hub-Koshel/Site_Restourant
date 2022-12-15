import React from 'react';
import {Card, CardBody, CardHeader, Media} from 'reactstrap';
import {Link} from 'react-router-dom';
import {baseUrl} from '../../shared/baseUrl';
import {Loading} from '../../components/loadingComponent';
import axios from "axios";


export const About = (props) => {

    const leaders = props.leaders.map((leader) => {
        return (
            <>
                <div className="media" key={leader.id}>
                    <div className='row'>
                        <div className='col-4'>
                            <img className="mr-3" src={baseUrl + leader.image} alt="Generic placeholder image"
                                 width='250px' height='250px'/>
                            <br/>
                            <br/>
                        </div>
                        <div className='col-8'>
                            <div className="media-body">
                                <h5 className="mt-0">Leader {leader.name}</h5>
                                <p>{leader.designation}</p>
                                <p>{leader.description}</p>
                            </div>
                        </div>
                    </div>
                </div>


            </>
        );
    })
    if (props.isLoading) {
        return (
            <div className='container'>
                <div className='row'>
                    <Loading/>
                </div>
            </div>
        )
    } else if (props.errMess) {
        return (
            <div className='container'>
                <div className='row'>
                    <h4>{props.errMess}</h4>
                </div>
            </div>
        )
    } else
        return (
            <div className="container">
                <div className="row">

                    <nav aria-label="breadcrumb" style={{marginTop: 20}}>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/home">Home</Link></li>
                            <li className="breadcrumb-item active">About Us</li>

                        </ol>
                    </nav>
                    <div className="col-12">
                        <h3>About Us</h3>
                        <hr/>
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-12 col-md-6">
                        <h2>Our History</h2>
                        <p>Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par
                            excellence in Rome. With its unique brand of world fusion cuisine that can be found nowhere
                            else, it enjoys patronage from the A-list clientele in Rome. Featuring four of the best
                            three-star Michelin chefs in the world, you never know what will arrive on your plate the
                            next time you visit us.</p>
                        <p>The restaurant traces its humble beginnings to <em>The Frying Pan</em>, a successful chain
                            started by our CEO, Mr. Peter Pan, that featured for the first time the world's best
                            cuisines in a pan.</p>
                    </div>
                    <div className="col-12 col-md-5">
                        <Card>
                            <CardHeader className="bg-primary text-white">Facts At a Glance</CardHeader>
                            <CardBody>
                                <dl className="row p-1">
                                    <dt className="col-6">Started</dt>
                                    <dd className="col-6">3 Feb. 2013</dd>
                                    <dt className="col-6">Major Stake Holder</dt>
                                    <dd className="col-6">HK Fine Foods Inc.</dd>
                                    <dt className="col-6">Last Year's Turnover</dt>
                                    <dd className="col-6">$1,250,375</dd>
                                    <dt className="col-6">Employees</dt>
                                    <dd className="col-6">40</dd>
                                </dl>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-12">
                        <Card>
                            <CardBody className="bg-faded">
                                <blockquote className="blockquote">
                                    <p className="mb-0">You better cut the pizza in four pieces because
                                        I'm not hungry enough to eat six.</p>
                                    <footer className="blockquote-footer">Yogi Berra,
                                        <cite title="Source Title">The Wit and Wisdom of Yogi Berra,
                                            P. Pepe, Diversion Books, 2014</cite>
                                    </footer>
                                </blockquote>
                            </CardBody>
                        </Card>
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-12">
                        <h2>Corporate Leadership</h2>
                        <br/>
                        <br/>
                    </div>


                    <div className="col-12">
                        <Media list>
                            {leaders}
                        </Media>
                    </div>
                </div>
            </div>
        );

};








