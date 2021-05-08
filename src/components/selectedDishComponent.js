import React ,{Component} from 'react';
import {Card,CardImg,CardImgOverlay,CardBody,CardText,CardTitle} from 'reactstrap';
class SelectDish extends Component{
     constructor(props)
     {
         super(props);
         this.state={
             review:null
         }
     }
    render()
    {  console.log(this.props.info);
        if(this.props.info!==undefined)
        {
        const reviews=this.props.info.comments.map((review) =>{
        
        return(
            <div key={review.id} className="col-12">
                <h6>{review.comment}</h6>
                <div>{new Intl.DateTimeFormat('en-US',{year:'numeric',month:'short',day:'2-digit'}).format(new Date(Date.parse(review.date)))}</div>
                <br></br>

            </div>
        );
    });
    return(
            <div className="row">
            <div  className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg top src={this.props.info.image} alt={this.props.info.name} />
                    <CardBody>
                      <CardTitle>{this.props.info.name}</CardTitle>
                      <CardText>{this.props.info.description}</CardText>
                    </CardBody>
                </Card>
                
              </div>
              <div className="col-12 col-md-5 m-1">
              <Card>
                    <CardTitle>Comments</CardTitle>
                    <CardBody>{reviews}</CardBody>
                </Card>
              </div>
            </div>
        );}
        else{
            
            return(<div></div>);
        }
    }
}
export default SelectDish;