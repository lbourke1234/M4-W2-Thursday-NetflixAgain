import { Component } from "react";
import {Col, Card} from 'react-bootstrap'

class CarouselItem extends Component {

    render() {

        return(

            <Col col={2}>
        <Card>
          <img
          width="200px"
          height="500px"
            src={this.props.movie.Poster}
            className="card-img-top"
            alt="..."
          />
        </Card>
    </Col>
        )
    }
}

export default CarouselItem