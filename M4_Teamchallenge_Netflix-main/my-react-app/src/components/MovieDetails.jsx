import { Card, Row, Container, Col, ListGroup } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

const MovieDetails = () => {
  const params = useParams()

  const [movieData, setMovieData] = useState([])
  const [movieComments, setMovieComments] = useState([])

  useEffect(() => {
    fetchMovieData()
    fetchMovieComments()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const fetchMovieData = async () => {
    const response = await fetch(
      'http://www.omdbapi.com/?apikey=6e593066&i=' + params.id
    )
    if (response.ok) {
      const body = await response.json()
      console.log(body)
      setMovieData(body)
    }
  }

  const fetchMovieComments = async () => {
    const response = await fetch(
      'https://striveschool-api.herokuapp.com/api/comments/' + params.id,
      {
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjU2YmQxZGE5MDIzOTAwMTVkOTY1YzgiLCJpYXQiOjE2NTExNTM0ODQsImV4cCI6MTY1MjM2MzA4NH0.qxxg7tNNGTg6XWDnavVyxiMsSa6ep1l9Ii3LiL8Sth4'
        }
      }
    )
    if (response.ok) {
      const body = await response.json()
      setMovieComments(body)
      console.log(body)
    }
  }

  return (
    <Container>
      <Row className="d-flex justify-content-center">
        <Col className="text-center">
          <Card>
            <Card.Img variant="top" src={movieData.Poster} />
            <Card.Body>
              <Card.Title>{movieData.Title}</Card.Title>
              <Card.Text>{movieData.Plot}</Card.Text>
              <Card.Title>{movieData.Director}</Card.Title>
              <Card.Text>{movieData.Writer}</Card.Text>
              <Card.Text>
                {movieData.Runtime} - {movieData.Year} -{' '}
                <strong>Rating: </strong> {movieData.imdbRating}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="d-flex justify-content-center">
        <Col className="text-center">
          <h2 className="my-3">Comments Section</h2>
          <ListGroup>
            {movieComments.map((comment) => {
              return (
                <ListGroup.Item>
                  {comment.comment} <strong>-</strong> {comment.rate}{' '}
                  <strong>-</strong> {comment.author}
                </ListGroup.Item>
              )
            })}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  )
}
export default MovieDetails
