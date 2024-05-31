import Head from 'next/head';
import { Component } from 'react';
import { attributes, react as RecipeDetail } from '../content/recipeDetail.md';

export default class Home extends Component {
  render() {
    let { title, author, servings } = attributes;
    return (
      <>
        <Head>
          <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        </Head>
        <article>
          <h1>{title}</h1>
          <RecipeDetail />
          <ul>
            {cats.map((cat, k) => (
              <li key={k}>
                <h2>{cat.name}</h2>
                <p>{cat.description}</p>
              </li>
            ))}
          </ul>
        </article>
      </>
    );
  }
}
