//Got major help from this chunk of code https://github.com/masives/netlifycms-nextjs/blob/master/pages/blog/index.js

import Link from 'next/link';
import React, { Component } from 'react';
import SearchBarWithIcon from '../../components/SearchBarWithIcon';

const RECIPE_POSTS_PATH = '../../content/recipes';

const importRecipeData = async () => {
  // https://medium.com/@shawnstern/importing-multiple-markdown-files-into-a-react-component-with-webpack-7548559fce6f
  // second flag in require.context function is if subdirectories should be searched
  const markdownFiles = require
    .context('../../content/recipes', false, /\.md$/)
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

const filterRecipeData = (recipeLists, keyword) => {
  console.log('Recipes Lists', recipeLists);

  const filteredRecipes = recipeLists.filter((recipe) => {
    const lowerCaseTitle = recipe.attributes.title.toLowerCase();
    return lowerCaseTitle.includes(keyword.toLowerCase());
  });

  if (filteredRecipes.length === 0) {
    console.warn('No matching recipes found');
  }

  return filteredRecipes;
};

export default class Recipe extends Component {
  static async getInitialProps() {
    try {
      const recipeList = await importRecipeData();
      return { recipeList };
    } catch (error) {
      console.error('Error fetching recipe data:', error);
      return {};
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      filterRecipes: props.recipeList,
      searchTerm: '',
    };
  }

  componentDidMount() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const value = urlParams.getAll('q');

    if (value && value.length > 0) {
      this.filterRecipes(value[0]);
    } else {
      this.setState({
        filteredRecipes: this.props.recipeList,
        searchTerm: '',
      });
    }
  }

  filterRecipes(keyword) {
    const filteredRecipes = filterRecipeData(this.props.recipeList, keyword);

    this.setState({ filteredRecipes });
  }

  render() {
    const { recipeList } = this.props;
    const { filteredRecipes, searchTerm } = this.state;

    if (!recipeList || recipeList.length === 0) {
      return <div>No recipes found</div>;
    }

    return (
      <>
        <SearchBarWithIcon
          placeholder={searchTerm || 'Search...'}
          onSearch={(keyword) => {
            this.filterRecipes(keyword);
          }}
        />
        <div className="recipe-list">
          {filteredRecipes && filteredRecipes.length > 0 ? (
            filteredRecipes.map((recipe, key) => (
              <Link href={`recipe/${recipe.slug}`} key={key}>
                <img src={recipe.attributes.featuredImage} />
                <h2>{recipe.attributes.title}</h2>
              </Link>
            ))
          ) : (
            <p>No matching recipes found.</p>
          )}
        </div>
      </>
    );
  }
}
