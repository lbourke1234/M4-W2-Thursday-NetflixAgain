import { Component } from "react";
import {Row} from 'react-bootstrap'

import CarouselItem from "./CarouselItem";

class CarouselRow extends Component {

    render() {


        return(

            <div>
        <Row >
{this.props.movies.map(movie => {return <CarouselItem movie={movie} />})}


      </Row>
      </div>

        )
    }
}

export default CarouselRow
