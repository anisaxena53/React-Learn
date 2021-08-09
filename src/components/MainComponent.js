import Menu from './MenuComponent';
import Home from './HomeComponent';
import SelectDish from './selectedDishComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import About from './AboutComponent';
import { Component } from 'react';
import {Switch,Redirect,Route,withRouter} from 'react-router-dom';
import Contact from './ContactComponent';
import {connect} from 'react-redux';
import {postComment,fetchDishes,fetchComments, fetchPromos } from '../redux/ActionCreators';
import { actions } from 'react-redux-form';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
const mapDispatchToProps=(dispatch)=>(
  {
     postComment:(dishId,rating,author,comment)=>dispatch(postComment(dishId,rating,author,comment)),
     fetchDishes:()=>{dispatch(fetchDishes())},
     resetFeedbackForm: () => { dispatch(actions.reset('feedback'))},
     fetchComments: () => dispatch(fetchComments()),
       fetchPromos: () => dispatch(fetchPromos())
  }
)

const mapStateToProps=state=>{
  return {
    dishes:state.dishes,
    comments:state.comments,
    promotions:state.promotions,
    leaders:state.leaders
  }
}
class Main extends Component
{
  constructor(props)
  {
    super(props);
    
  }
  componentDidMount()
  {
    this.props.fetchDishes();
    this.props.fetchComments();
    this.props.fetchPromos();
  }
  
  
  render()
  { const HomePage=()=>
    {
      return(
     
          <Home
          dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
              promotion={this.props.promotions.promotions.filter((promo) => promo.featured)[0]}
              leader={this.props.leaders.filter((leader) => leader.featured)[0]}
              dishesLoading={this.props.dishes.isLoading}
              dishesErrMess={this.props.dishes.errMess}
              promoLoading={this.props.promotions.isLoading}
              promoErrMess={this.props.promotions.errMess}
          />
         
       
      );
    }
    const DishWithId=({match})=>{
     
      return(
        <SelectDish dish={this.props.dishes.dishes.filter((dish)=>dish.id===parseInt(match.params.dishId,10))[0]}
           comments={this.props.comments.comments.filter((comment)=>comment.dishId===parseInt(match.params.dishId,10))}
           isLoading={this.props.dishes.isLoading}
           errMess={this.props.dishes.errMess}
           postComment={this.props.postComment}
           commentsErrMess={this.props.comments.errMess}
          
        />
        
        

      );

    }
    return (
    <div>
      <Header/>
      <TransitionGroup>
            <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
              <Switch location={this.props.location}>
                  <Route path='/home' component={HomePage} />
                  <Route exact path='/aboutus' component={() => <About leaders={this.props.leaders} />} />} />
                  <Route exact path='/menu' component={() => <Menu dishes={this.props.dishes} />} />
                  <Route path='/menu/:dishId' component={DishWithId} />
                  <Route exact path='/contactus' component={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm} />} />
                  <Redirect to="/home" />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
      <Footer />
    </div>
  );
}
}
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main));
