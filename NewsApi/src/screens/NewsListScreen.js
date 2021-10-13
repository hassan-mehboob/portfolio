import React, { useEffect } from 'react'
import { Card, Container, Row, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import { fetchNews } from '../actions/NewsAction'
import Message from '../components/Message'

const NewsListScreen = () => {
  const dispatch = useDispatch()
  const newsList = useSelector((state) => state.newsList)
  let { loading, error, data } = newsList
  data = data.articles
  console.log(data)
  console.log(error)
  useEffect(() => {
    dispatch(fetchNews())
    // eslint-disable-next-line
  }, [])
  return (
    <Container className='my-4'>
      <h1 className='text-center'>Latest News About Technology</h1>
      <Row xs={1} md={4}>
        {data ? (
          data.map((data) => (
            <Card style={{ width: '18rem' }} className='m-2'>
              <Card.Img variant='top' src={data.urlToImage} />
              <Card.Body>
                <Card.Title className='pointer'>{data.title}</Card.Title>
                <Button href={data.url}>Click To Read Full News</Button>
              </Card.Body>
            </Card>
          ))
        ) : loading ? (
          <Loader />
        ) : (
          <Message variant='danger'>{error}</Message>
        )}
      </Row>
    </Container>
  )
}

export default NewsListScreen
