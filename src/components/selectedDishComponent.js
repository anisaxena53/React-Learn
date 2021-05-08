import React  from 'react';
import {Card,CardImg,CardBody,CardText,CardTitle} from 'reactstrap';
 function Comments ({info})
 {
    return(
        <div><h6>{info.comment}</h6>
                <div>{new Intl.DateTimeFormat('en-US',{year:'numeric',month:'short',day:'2-digit'}).format(new Date(Date.parse(info.date)))}</div>
                <br></br>
                </div>
    );
 }
 const SelectDish =(props)=>
{
    if(props.info!==undefined)
        {
        const reviews=props.info.comments.map((review) =>{
        
        return(
            <div key={review.id} className="col-12 col-md-5 m-1">
               <Comments info={review} />  
            
            </div>
        );
    });
    return(
            <div className="row">
            <div  className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg top src={props.info.image} alt={props.info.name} />
                    <CardBody>
                      <CardTitle>{props.info.name}</CardTitle>
                      <CardText>{props.info.description}</CardText>
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
        
   
export default SelectDish;