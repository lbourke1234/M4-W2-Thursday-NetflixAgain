import { Col, Card, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const CarouselItem = (props) => {
  const navigate = useNavigate()

  return (
    <Col col={2}>
      <Card>
        <img
          width="200px"
          height="500px"
          src={props.movie.Poster}
          className="card-img-top"
          alt="..."
        />
        <Button
          variant="info"
          onClick={() => navigate('/movie-details/' + props.movie.imdbID)}
        >
          Details
        </Button>
      </Card>
    </Col>
  )
}

export default CarouselItem
