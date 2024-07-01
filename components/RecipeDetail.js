import { Container, Row, Col } from 'react-bootstrap';

const RecipeDetail = ({
  title,
  author,
  summary,
  dairyFree,
  servings,
  prepTime,
  cookTime,
  featuredImage,
  ingredients,
  instructions,
  videoTitle,
  videoURL,
}) => {
  console.log('ingredients', ingredients);
  const ingredientList = ingredients.map((ingredient, index) => {
    return <li key={index}>{ingredient.ingredient}</li>;
  });
  return (
    <Container className="mt-4">
      <Row>
        <Col md={8}>
          <img src={featuredImage} fluid />
        </Col>
        <Col md={4}>
          <h1>{title}</h1>
          <p>Published by: {author}</p>
          <p>Prep Time: {prepTime} mins</p>
          <p>Cook Time: {cookTime} mins</p>
          <p>Servings: {servings}</p>
          {/* Replace dairy free string to be image/logo */}
          <p>{dairyFree == true ? 'Dairy Free' : 'Not Dairy Free'}</p>
        </Col>
      </Row>

      {/* Fix spacing for summary to be in a row format */}
      <Col md={6}>
        <h1>Summary</h1>
        {/* <p>{summary}</p> */}
      </Col>
      <Row className="mt-4">
        <Col md={6}>
          <h3>Ingredients</h3>
          <ul>{ingredientList}</ul>
        </Col>
        <Col md={6}>
          <h3>Cooking Instructions</h3>
          <h2></h2>
        </Col>
      </Row>
    </Container>
  );
};

export default RecipeDetail;
