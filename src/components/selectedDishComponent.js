import React,{Component } from 'react';
import {Card,CardImg,CardBody,CardText,CardTitle,BreadcrumbItem,Breadcrumb,Modal,Button,ModalHeader,ModalBody,Nav,NavItem,Label, Col,Row} from 'reactstrap';
import { Link } from 'react-router-dom';
import {LocalForm,Control,Errors} from 'react-redux-form';
const maxLength=(len)=>(val)=>!(val) || (val.length<=len);
const minLength=(len)=>(val)=>(val) && (val.length>len);
 function RenderComments ({comments})
 {
    if(comments!=null)
    {
        return(
            <div className="col-12 col-md-5 m-1">
                <h4>Comments</h4>
                <ul className="list-unstyled">
                    {comments.map((comment) => {
                        return(
                            <li key={comment.id}>
                                <p>{comment.comment}</p>
                                <p>--{comment.author}, {new Intl.DateTimeFormat('en-US',{year:'numeric',month:'short',day:'2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                            </li>
                        );})}
                    
                </ul>
                            
                
            </div>

        );
    }
    else{
        return(
            <div></div>
        );
    }
 }
 function RenderDish({dish})
 {
    return(
        
        
            <Card>
                <CardImg top width="100%" src={dish.image} alt={dish.name} />
                <CardBody>
                  <CardTitle>{dish.name}</CardTitle>
                  <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
            
        
          
    );
 }
 class SelectDish extends Component
{  constructor(props) {
    super(props);
    this.toggleModal = this.toggleModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      isModalOpen:false
    };
  }
  handleSubmit(values)
 {
     this.toggleModal();
     console.log('Current State is: ' + JSON.stringify(values));
        alert('Current State is: ' + JSON.stringify(values));
        
 }
  toggleModal() {

    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
    
  }
    render()
    { 
        return (
            <div className="container">
            <div className="row">
                <Breadcrumb>
    
                    <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{this.props.dish.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>{this.props.dish.name}</h3>
                    <hr />
                </div>                
            </div>
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <RenderDish dish={this.props.dish} />
                </div>
                <div className="col-12 col-md-5 m-1">
                    <RenderComments comments={this.props.comments} />
                    <Nav >
                                <NavItem>
                                    <Button outline onClick={this.toggleModal}>
                                        <span className='fa fa-pencil fa-lg'></span>Submit Comment
                                    </Button>
                                </NavItem>
                            </Nav>
                </div>
               
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Comment</ModalHeader>
                    <ModalBody>
                       <LocalForm onSubmit={(values)=>this.handleSubmit(values)}>
                           <Row className='form-group'>
                           <Label htmlFor="rating" md={2}>Rating</Label>
                           <Col md={10}>
                                    <Control.select model=".rating" name="rating"
                                            className="form-control"
                                            >
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        
                                    </Control.select>
                                </Col>
 
                           </Row>
                           <Row className='form-group'>
    <Label htmlFor="name" md={2}>Name</Label>
    <Col md={10}>
        <Control.text model=".name" id="name" name="name"
            placeholder="Name"
            className="form-control"
            
            validators={{
                 minLength: minLength(3), maxLength: maxLength(15)
            }}/>
            <Errors
                                        className="text-danger"
                                        model=".name"
                                        show="touched"
                                        messages={{
                                            
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                     />
        
    </Col>
</Row>
<Row className='form-group'>
                                <Label htmlFor="message" md={2}>Comment</Label>
                                <Col md={10}>
                                    <Control.textarea model=".message" id="message" name="message"
                                        rows="6"
                                        className="form-control"
                                        ></Control.textarea>
                                </Col>
                            </Row>
                            <Row className='form-group'>
                                <Col md={{size: 10, offset: 2}}>
                                    <Button type="submit" color="primary">
                                        Submit
                                    </Button>
                                </Col>
                            </Row>
                        </LocalForm>

                      
                    </ModalBody>
                </Modal>
            </div>
            </div>
        );
    }
    
}
        
   
export default SelectDish;
