//Got major help from this chunk of code https://github.com/masives/netlifycms-nextjs/blob/master/pages/blog/index.js

import Link from "next/link";
import React, { Component } from "react";
import Fuse from "fuse.js";
import SearchBarWithIcon from "../../components/SearchBarWithIcon";

const RECIPE_POSTS_PATH = "../../content/recipes";

const importRecipeData = async () => {
  // https://medium.com/@shawnstern/importing-multiple-markdown-files-into-a-react-component-with-webpack-7548559fce6f
  // second flag in require.context function is if subdirectories should be searched
  const markdownFiles = require
    .context("../../content/recipes", false, /\.md$/)
    .keys()
    .map((relativePath) => relativePath.substring(2));
  console.log(markdownFiles);
  return Promise.all(
    markdownFiles.map(async (path) => {
      const markdown = await import(`../../content/recipes/${path}`);
      return { ...markdown, slug: path.substring(0, path.length - 3) };
    })
  );
};

const filterRecipeData = (recipeLists, keyWordSearch) => {
  const fuse = new Fuse(recipeLists, {
    keys: ["title"],
  });

  const searchResult = fuse.search(keyWordSearch);

  return searchResult;
};

export default class Recipe extends Component {
  static async getInitialProps() {
    const recipeList = await importRecipeData();

    return { recipeList };
  }

  render() {
    const { recipeList } = this.props;
    return (
      <>
        <div className="recipe-list">
          <div className="page-header">
            <h1>Recipes</h1>
          </div>
          <div className="mb-section">
            <SearchBarWithIcon />
          </div>
          <div className="container">
            <div className="row">
              {recipeList.map((recipe, key) => {
                return (
                  <div className="col-sm" key={key}>
                    <Link href={`recipe/${recipe.slug}`}>
                      <div className="recipe-card">
                        <img
                          className="recipe-card--image"
                          src={recipe.attributes.featuredImage}
                        />
                        <h4>{recipe.attributes.title}</h4>
                        <p className="recipe-card--summary">Example Summary</p>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </>
    );
  }
}
