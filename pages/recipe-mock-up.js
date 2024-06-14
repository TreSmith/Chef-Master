import { Container, Row, Col } from 'react-bootstrap';

const RecipeMockUp = () => {
  return (
    <Container className="mt-4">
      <Row>
        <Col md={8}>
          <img
            src="/static/images/freeStockImages/street-food-feast-stockcake.jpg"
            fluid
          />
        </Col>
        <Col md={4}>
          <h1>Lorem Ipsum</h1>
          <p>Published by: Tasty Publications</p>
          <p>Prep Time: 30 mins</p>
          <p>Servings: 2</p>
          <p>"Cooking Book" by Author</p>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md={6}>
          <h3>Ingredients</h3>
          <ul>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
          </ul>
        </Col>
        <Col md={6}>
          <h3>Cooking Instructions</h3>
          <ol>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
          </ol>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <h3>Recipe Tutorial</h3>
          <img src="/static/images/freeStockImages/streetfood.jpg" />
        </Col>
      </Row>
    </Container>
  );
};

export default RecipeMockUp;