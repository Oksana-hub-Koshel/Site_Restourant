import React, {Component} from 'react';
import {Menu} from "../pages/Menu/Menu";
import Header from './Header/HeaderComponent';
import {DishDetail} from '../pages/DishDetail/DishDetail';
import {Home} from '../pages/HomePage/HomeComponent';
import {Footer} from './Footer/Footer';
import {About} from '../pages/About/AboutComponent';
import Contact from '../pages/Contacts/ContactComponent';
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {postComment, fetchDishes, fetchComments, fetchPromos, fetchLeaders} from '../redux/ActionCreators';
import {actions} from 'react-redux-form';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import Offers from "../pages/Offers/Offers";


const mapStateToProps = state => {
    return {
        dishes: state.dishes,
        comments: state.comments,
        leaders: state.leaders,
        promotions: state.promotions
    }
}

const mapDispatchToProps = (dispatch) => ({
    postComment: (dishId, rating, author, comment) => dispatch(postComment(dishId, rating, author, comment)),
    fetchDishes: () => {
        dispatch(fetchDishes())
    },
    resetFeedbackForm: () => {
        dispatch(actions.reset('feedback'))
    },
    resetCommentForm: () => {
        dispatch(actions.reset('comment'))
    },
    fetchComments: () => {
        dispatch(fetchComments())
    },
    fetchPromos: () => {
        dispatch(fetchPromos())
    },
    fetchLeaders: () => {
        dispatch(fetchLeaders())
    }
})

class Main extends Component {

    componentDidMount() {
        this.props.fetchDishes();
        this.props.fetchComments();
        this.props.fetchPromos();
        this.props.fetchLeaders();
    }


    render() {

        const HomePage = () => {
            return (
                <Home
                    dish={this.props.dishes.dishes.filter((dish) => console.log(dish))}
                    dishesLoading={this.props.dishes.isLoading}
                    dishesErrMess={this.props.dishes.errMess}
                    promotion={this.props.promotions.promotions.filter((promo) => promo.featured)[0]}
                    promosLoading={this.props.promotions.isLoading}
                    promosErrMess={this.props.promotions.errMess}
                    leader={this.props.leaders.leaders.filter((leader) => leader.featured)[0]}
                    leadersLoading={this.props.leaders.isLoading}
                    leadersErrMess={this.props.leaders.errMess}
                />
            )
        }

        const DishWidthId = ({match}) => {
            return (
                <DishDetail
                    dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]}
                    isLoading={this.props.dishes.isLoading}
                    errMess={this.props.dishes.errMess}
                    comments={this.props.comments.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId))}
                    commentsErrMess={this.props.comments.errMess}
                    postComment={this.props.postComment}
                    resetCommentForm={this.props.resetCommentForm}
                />
            );

        }
        return (
            <>

                <Header/>
                <TransitionGroup>
                    <CSSTransition key={this.props.location.key} classNames='page' timeout={300}>
                        <Switch>
                            <Route path="/home" component={HomePage}/>
                            <Route path="/offers" component={Offers}/>
                            <Route exact path="/menu" component={() => <Menu dishes={this.props.dishes}/>}/>
                            <Route path="/menu/:dishId" component={DishWidthId}/>
                            <Route exact path="/contactus"
                                   component={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm}/>}/>
                            <Route exact path="/aboutus"
                                   component={() => <About leaders={this.props.leaders.leaders}/>}/>
                            <Redirect to="/home"/>
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>


                <Footer/>

            </>
        );


    }

}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));


// const [selectedDish, setSelectedDish] = useState();

// const onDishSelect = (dish) => {
//    setSelectedDish(dish);
// }

{/* <div className='container'>
            <Menu onClick={onDishSelect} onDishClick={onDishSelect} />
         </div>
         {selectedDish && (
            <>
               <br />
               <br />


               <DishDetail dish={DISHES.filter(dish => dish === selectedDish)[0]} />

            </>
         )} */
}
