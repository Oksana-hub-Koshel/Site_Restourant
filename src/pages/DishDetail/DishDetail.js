import {Description} from './Description';
import {Comments} from './Comments';
import {Link} from 'react-router-dom';
import {Breadcrumb, BreadcrumbItem} from "reactstrap";
import {Loading} from '../../components/loadingComponent';


export const DishDetail = (props) => {
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
    } else if (props.dish != null) {
        return (
            <>
                <div className="container">

                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                            <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                        </Breadcrumb>

                        <div className="col">
                            <h3>{props.dish.name}</h3>
                            <hr/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            <Description dish={props.dish}/>

                        </div>
                        <div className="col-12 col-md-5 m-1">
                            <Comments comments={props.comments} postComment={props.postComment} dishId={props.dish.id}
                                      resetCommentForm={props.resetCommentForm}/>

                        </div>
                    </div>

                </div>


            </>
        )
    }


}

