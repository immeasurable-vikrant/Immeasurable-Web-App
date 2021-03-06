import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText,Button, Jumbotron  } from 'reactstrap';
import { Redirect } from 'react-router-dom';



class Wisdom extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedMedium: null,
            articleRedirect:false
        }
    }

    onSelectedDish(medium) {
        this.setState({
            selectedMedium: medium,
            articleRedirect:true
        })
    }


    render() {
        
        const { articleRedirect, selectedMedium } = this.state; 
        if ( articleRedirect ){
            return  <Redirect to={{
                pathname: '/article',
                state: { blogs: selectedMedium }
            }}/>
        }
        
        const menu = this.props.mediums.map(medium => {
            return (
                
                <div key={medium.id} className='col-12 col-md-4 '>
                
        <Card onClick={() => this.onSelectedDish(medium)}>
        <CardImg top width="100%" src= {medium.image} alt= {medium.name} />
        <CardBody>
          <CardTitle>{medium.name}</CardTitle>
          <CardText>{medium.description}</CardText>
          <Button>See More</Button>
        </CardBody>
      </Card>
                </div>
            );
        });
        return (
            <div className="jumbo">
            
            <Jumbotron className="jumbotron-learning"  >
            <div className="container">    
                <div className="row row-header">
                    <div className="col-12 col-sm-10">
                   <h1>Immeasurable</h1>
                    <h3><p>As there is a technology to create external wellbeing, there is a whole dimension of science and technology to create inner wellbeing.</p></h3>
                        <Button className="btn-sub">Subscribe Now</Button>
                    </div>
                </div>
                </div>
            </Jumbotron>
            

            <div className='container'>
                <div className='row'>
               

                <h2 className=" arjun">"Ideas and perspectives you won’t find anywhere else."</h2>
                <h5 className="text-muted text-center arjun1">Immeasurable taps into the brains of the world’s most insightful writers, thinkers, and storytellers to bring you the smartest takes on topics that matter. So whatever your interest, you can always find fresh thinking and unique perspectives.</h5>
                    {menu}
                    </div>
              
            </div>
            </div>
        );
    }
}

export default Wisdom; 



