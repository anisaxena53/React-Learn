import React ,{Component} from 'react';
import SelectDish from './selectedDishComponent';
import {Card,CardImg,CardImgOverlay,CardBody,CardText,CardTitle} from 'reactstrap';
class Menu extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            
            selectedDish:null
        }
    }
    onDishSelect(dish)
    {
        this.setState({selectedDish:dish})
        console.log(dish);
    }
    renderDish(dish) {
        if (dish != null)
            return(
                <SelectDish info={this.state.selectedDish} />
            );
        else
            return(
                <div></div>
            );
    }
    render()
    { const menu=this.props.dishes.map((dish) =>{
        return(
            <div key={dish.id} className="col-12 col-md-5">
                <Card onClick={() => this.onDishSelect(dish)}>
                    
                        <CardImg width="100%" src={dish.image} alt={dish.name} />

                   
                    <CardImgOverlay body className="ml-5">
                        <CardTitle heading>{dish.name}</CardTitle>
                        
                    </CardImgOverlay>
                </Card>
            </div>
        );
    });
        return(
            <div className="container">
                <div className="row">
                   
                       {menu}
                   
                </div>
                <div>
                {this.renderDish(this.state.selectedDish)}
            </div>
            </div>
        );
    }
}
export default Menu;