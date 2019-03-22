import React ,{Component} from 'react';
import {Container,Row,Col,Media} from 'react-bootstrap';

export default class AboutUs extends Component {
    render() {
    return (
        <Container>
   <Media>
  <img
    width={64}
    height={64}
    className="mr-3"
    src="https://source.unsplash.com/random/64x64"
    alt="Generic placeholder"
  />
  <Media.Body>
    <h5>Media Heading</h5>
    <p>
      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
      ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
      tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
      Donec lacinia congue felis in faucibus.
    </p>
  </Media.Body>
</Media>
</Container>
    );
        
}
}