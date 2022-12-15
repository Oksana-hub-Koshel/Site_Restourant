import {Link} from "react-router-dom";
import {Button, Label, Col, Row, Breadcrumb, BreadcrumbItem,} from "reactstrap";
import {Component} from "react";
import {Control, Form, Errors} from "react-redux-form";
import "./Contact.css";

const requred = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) =>
    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class Contact extends Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        // this.handleInputChange = this.handleInputChange.bind(this);
        // this.handleBlur = this.handleBlur.bind(this);
    }

    // handleInputChange(event) {
    //     const target = event.target;
    //     const value = target.type === 'checkbox' ? target.checked : target.value;
    //     const name = target.name;

    //     this.setState({
    //         [name]: value
    //     })
    // }

    handleSubmit(values) {
        console.log("Current state is" + JSON.stringify(values));
        alert("Current state is" + JSON.stringify(values));
        this.props.resetFeedbackForm();
    }

    // handleBlur = (field) => (evt) => {
    //     this.setState({
    //         touched: {
    //             ...this.state.touched, [field]: true
    //         }
    //     });
    // };

    // validate(firstname, lastname, telnum, email) {
    //     const errors = {
    //         firstname: '',
    //         lastname: '',
    //         telnum: '',
    //         email: ''
    //     };
    //     if (this.state.touched.firstname && firstname.length < 3)
    //         errors.firstname = 'First name should contains more than 3 characters';
    //     else if (this.state.touched.firstname && firstname.length > 10)
    //         errors.firstname = 'First name should contains less than 10 characters';

    //     if (this.state.touched.lastname && lastname.length < 3)
    //         errors.lastname = 'Second name should contains more than 3 characters';
    //     else if (this.state.touched.lastname && lastname.length > 10)
    //         errors.lastname = 'Second name should contains less than 10 characters';

    //     const reg = /^\d+$/;
    //     if (this.state.touched.telnum && !reg.test(telnum))
    //         errors.telnum = 'Tel. num should contain only numbers';

    //     if (this.state.touched.email && email.split('').filter(x => x === '@').length !== 1)
    //         errors.email = 'Email should contain @';

    //     return errors;
    // }

    render() {
        // const errors = this.validate(this.state.firstname, this.state.lastname, this.state.telnum, this.state.email);

        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb style={{marginTop: 20}}>
                        <BreadcrumbItem>
                            <Link to="/home">Home</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                    </Breadcrumb>

                    <div className="col-12">
                        <h3>Contact Us</h3>
                        <hr/>
                    </div>
                </div>

                <div className="row row-content">
                    <div className="col-12" style={{marginBottom: 20}}>
                        <h3>Location Information</h3>
                    </div>
                    <div className="col-12 col-sm-4 offset-sm-1">

                        <h5>Our Address</h5>
                        <address>
                            121, Clear Water Bay Road
                            <br/>
                            Clear Water Bay, Kowloon
                            <br/>
                            LONDON
                            <br/>
                            <i className="fa fa-phone"></i>: +352 1234 5678
                            <br/>
                            <i className="fa fa-fax"></i>: +352 8765 4321
                            <br/>
                            <i className="fa fa-envelope"></i>:{" "}
                            <a href="mailto:confusion@food.net">confusion@food.net</a>
                        </address>
                        <div className="btn-group" role="group" style={{marginTop: 20}}>
                            <a
                                role="button"
                                className="btn btn-primary"
                                href="tel:+85212345678"
                            >
                                <i className="fa fa-phone"></i> Call
                            </a>
                            <a role="button" className="btn btn-info">
                                <i className="fa fa-skype"></i> Skype
                            </a>
                            <a
                                role="button"
                                className="btn btn-success"
                                href="mailto:confusion@food.net"
                            >
                                <i className="fa fa-envelope-o"></i> Email
                            </a>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 offset-sm-1">
                        <h5>Map of our Location</h5>
                        <iframe style={{width: 500, height: 350}}
                                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                            <a href="https://www.maps.ie/distance-area-calculator.html">distance maps</a></iframe>
                    </div>


                    <div className="col-12 col-sm-11 offset-sm-1">

                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-12">
                        <h3>Send Us Your Feedback</h3>
                    </div>

                    <div className="col-12 col-md-9">
                        <Form
                            model="feedback"
                            onSubmit={(values) => this.handleSubmit(values)}
                        >
                            <Row className="form-group forms">
                                <Label htmlFor="firstname" md={2}>
                                    First Name
                                </Label>
                                <Col md={10}>
                                    <Control.text
                                        model=".firstname"
                                        id="firstname"
                                        name="firstname"
                                        placeholder="First Name"
                                        // onChange={this.handleInputChange}
                                        className="form-control"
                                        validators={{
                                            requred,
                                            minLength: minLength(3),
                                            maxLength: maxLength(15),
                                        }}
                                        // valid={errors.firstname === ''}
                                        // invalid={errors.firstname !== ''}
                                        // onBlur={this.handleBlur('firstname')}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".firstname"
                                        show="touched"
                                        messages={{
                                            requred: "Requred",
                                            minLength: "Must be more than 2 characters",
                                            maxLength: "Must be not more than 15 characters",
                                        }}
                                    />
                                </Col>
                            </Row>

                            <Row className="form-group forms">
                                <Label htmlFor="lastname" md={2}>
                                    Last Name
                                </Label>
                                <Col md={10}>
                                    <Control.text
                                        model=".lastname"
                                        id="lastname"
                                        name="lastname"
                                        placeholder="Last Name"
                                        // onChange={this.handleInputChange}
                                        className="form-control"
                                        validators={{
                                            requred,
                                            minLength: minLength(3),
                                            maxLength: maxLength(15),
                                        }}
                                        // valid={errors.lastname === ''}
                                        // invalid={errors.lastname !== ''}
                                        // onBlur={this.handleBlur('lastname')}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".lastname"
                                        show="touched"
                                        messages={{
                                            requred: "Requred",
                                            minLength: "Must be more than 2 characters",
                                            maxLength: "Must be not more than 15 characters",
                                        }}
                                    />
                                </Col>
                            </Row>

                            <Row className="form-group forms">
                                <Label htmlFor="telnum" md={2}>
                                    Contact Tel.
                                </Label>
                                <Col md={10}>
                                    <Control.text
                                        model=".telnum"
                                        id="telnum"
                                        name="telnum"
                                        placeholder="Tel. Number"
                                        // onChange={this.handleInputChange}
                                        className="form-control"
                                        validators={{
                                            requred,
                                            minLength: minLength(3),
                                            maxLength: maxLength(15),
                                            isNumber,
                                        }}
                                        // valid={errors.telnum === ''}
                                        // invalid={errors.telnum !== ''}
                                        // onBlur={this.handleBlur('telnum')}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".telnum"
                                        show="touched"
                                        messages={{
                                            requred: "Requred",
                                            minLength: "Must be more than 2 numbers",
                                            maxLength: "Must be not more than 15 numbers",
                                            isNumber: "Must be a number",
                                        }}
                                    />
                                </Col>
                            </Row>

                            <Row className="form-group forms">
                                <Label htmlFor="email" md={2}>
                                    Email
                                </Label>
                                <Col md={10}>
                                    <Control.text
                                        model=".email"
                                        id="email"
                                        name="email"
                                        placeholder="Email"
                                        className="form-control"
                                        // onChange={this.handleInputChange}
                                        // valid={errors.email === ''}
                                        // invalid={errors.email !== ''}
                                        // onBlur={this.handleBlur('email')}
                                        validators={{
                                            requred,
                                            validEmail,
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".email"
                                        show="touched"
                                        messages={{
                                            requred: "Requred",
                                            validEmail: "Invalid email address",
                                        }}
                                    />
                                </Col>
                            </Row>

                            <Row className="form-group forms">
                                <Col md={{size: 6, offset: 2}}>
                                    <div className="form-check">
                                        <Label check>
                                            <Control.checkbox
                                                model=".agree"
                                                name="agree"
                                                className="form-check"
                                                // checked={this.state.agree}
                                                // onChange={this.handleInputChange}
                                            />
                                            <strong>May we contact with you?</strong>
                                        </Label>
                                    </div>
                                </Col>
                                <Col md={{size: 3, offset: 1}}>
                                    <Control.select
                                        model=".contactType"
                                        name="contactType"
                                        className="form-control"
                                        // value={this.state.contactType} onChange={this.handleInputChange}
                                    >
                                        <option>Tel.</option>
                                        <option>Email</option>
                                    </Control.select>
                                </Col>
                            </Row>

                            <Row className="form-group forms">
                                <Label htmlFor="message" md={2}>
                                    Your feedback
                                </Label>
                                <Col md={10}>
                                    <Control.textarea
                                        model=".message "
                                        id="message"
                                        name="message "
                                        rows="12"
                                        // value={this.state.message}
                                        // onChange={this.handleInputChange}
                                        className="form-control"
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size: 10, offset: 2}}>
                                    <Button type="submit" color="primary ">
                                        Send Feedback{" "}
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;
