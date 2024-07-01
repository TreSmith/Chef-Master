import React, {Component} from 'react'

class Post extends Component {
    static async getInitialProps({query}){
        const {slug} = query;
        const recipePost = await import(`../../content/recipes/${slug}.md`).catch(error => null);

        return {recipePost};
    }

    render() {
        if(!this.props.recipePost) return <div>not found</div>;

        const {
            html,
            attributes
        } = this.props.recipePost.default;

        console.log(attributes)

        return(
            <>
                
            </>
        );
    }
}

export default Post;