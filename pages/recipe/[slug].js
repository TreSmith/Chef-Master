import React, { Component } from 'react';
import RecipeDetail from '../../components/RecipeDetail';

class Post extends Component {
  static async getInitialProps({ query }) {
    const { slug } = query;
    const recipePost = await import(`../../content/recipes/${slug}.md`).catch(
      (error) => null
    );

    return { recipePost };
  }

  render() {
    if (!this.props.recipePost)
      // Create a error page
      return <div>not found</div>;

    const { html, attributes } = this.props.recipePost.default;

    console.log(attributes);

    let {
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
    } = attributes;

    return (
      <>
        <RecipeDetail
          title={title}
          author={author}
          summary={summary}
          dairyFree={dairyFree}
          servings={servings}
          prepTime={prepTime}
          cookTime={cookTime}
          featuredImage={featuredImage}
          ingredients={ingredients}
          instructions={instructions}
        />
      </>
    );
  }
}

export default Post;
