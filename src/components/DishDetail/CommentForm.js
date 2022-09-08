import { Label } from 'reactstrap';
import { Modal, ModalBody, ModalHeader, Button } from 'reactstrap';
import { FormGroup } from 'reactstrap';
import { useState } from 'react';
import { Control, Errors, Form, actions } from "react-redux-form";
import './Comments.css';


const requred = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;



export const CommentForm = (props) => {
    console.log(props)
    const [isModal, setModal] = useState(false);



    const handleSubmit = (values) => {
        props.resetCommentForm();
        console.log("Current state is" + JSON.stringify(values));
        props.postComment(props.dishId, values.rating, values.author, values.comment);

    }

    const handleClose = () => {
        setModal(false);
    }

    return (
        <>
            <button onClick={() => setModal(true)} className='button-sub'><span className='fa fa-sign-in fa-lg '></span>Submit Comment</button>


            <Modal isOpen={isModal} >

                <ModalHeader> Submit Comment
                    <button type="button" className="close_popup js-close-popup button-krest" onClick={handleClose}>x</button>
                </ModalHeader>

                <ModalBody>

                    <Form model="comment" onSubmit={(values) => handleSubmit(values)}>

                        <FormGroup >
                            <Label check sm={2}> Rating</Label>
                            <select type="select" name="remember" rows="12" >
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>

                        </FormGroup>

                        <FormGroup>
                            <Label htmlFor="username" >Username</Label>
                            <Control.textarea model='.author' id='author' placeholder='Your Name' className='form-control' rows="2"
                                validators={{
                                    minLength: minLength(3),
                                    maxLength: maxLength(15),
                                    requred
                                }} />


                            <Errors className='text-danger' model='.author' show='touched' messages={{
                                minLength: 'Must be greater than 2 characters',
                                maxLength: 'Must be 15 characters and less',
                                requred: 'This field could not be empty'
                            }} />
                        </FormGroup>

                        <FormGroup>
                            <Label htmlFor="comment" >Your comment</Label>
                            <Control.textarea model='.comment' id='comment' className='form-control' rows="12"></Control.textarea>
                        </FormGroup>


                        <Button type="submit" value="submit" className="primary button-s">Submit</Button>
                    </Form>
                </ModalBody>


            </Modal>
        </>
    );


}




// function CommentForm(props) {
//     const [show, setShow] = useState(false);
//     const [username, setUserName] = useState('');
//     const [userNameError, setUserNameError] = useState('');


//     const handleClose = () => setShow(false);
//     const handleShow = () => setShow(true);



//     const nameHandler = (e) => {
//         setUserName(e.target.value);
//         if (e.target.value.length < 3 || e.target.value.length > 10) {
//             setUserNameError('Name must contains more than 2 characters and not more 10')
//             if (!e.target.value) {
//                 setUserNameError('Name cant to be empty')
//             }
//         }
//         else {
//             setUserNameError('');
//         }
//     }

//     const handleSubmit = (values) => {

//         // console.log("Current state is" + JSON.stringify(values));
//         // alert("Current state is" + JSON.stringify(values));
//         props.postComment(props.dishId, values.rating, values.author, values.comment);

//     }

//     return (
//         <>


//             <Button className="log-button" onClick={handleShow}>
//                 <span className='fa fa-sign-in fa-lg '></span>Submit Comment
//             </Button>


//             <Modal
//                 show={show}
//                 onHide={handleClose}
//                 backdrop="static"
//                 keyboard={false}
//                 onSubmit={(values) => handleSubmit(values)}
//             >
//                 <Modal.Header closeButton>
//                     <Modal.Title>Submit Comment</Modal.Title>
//                 </Modal.Header>

//                 <Modal.Body>
//                     <FormGroup row>
//                         <Label for="exampleSelect" sm={2} >Rating</Label>
//                         <Col sm={12}>
//                             <Input id="exampleSelect" name="select" type="select" >
//                                 <option>1</option>
//                                 <option>2</option>
//                                 <option>3</option>
//                                 <option>4</option>
//                                 <option>5</option>
//                             </Input>
//                         </Col>
//                     </FormGroup>

//                     <FormGroup>
//                         <Label for="username">Your Name</Label>
//                         <Input value={username} type="text" name="username" id="username" onChange={e => nameHandler(e)} />
//                         {(userNameError) && <div style={{ color: 'red' }}>{userNameError}</div>}


//                     </FormGroup>

//                     <FormGroup row>
//                         <Label for="exampleText" sm={2} > Comment </Label>
//                         <Col sm={12}>
//                             <Input id="exampleText" name="text" type="textarea" rows="12" />
//                         </Col>
//                     </FormGroup>
//                 </Modal.Body>

//                 <Modal.Footer>
//                     <Button variant="secondary" onClick={handleClose} className="button-submit">
//                         Submit
//                     </Button>

//                 </Modal.Footer>
//             </Modal>
//         </>
//     );
// }

// export default CommentForm;