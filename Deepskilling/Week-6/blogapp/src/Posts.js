import React from 'react';
import Post from './Post';

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      hasError: false
    };
  }

  loadPosts = () => {
    const data = [
      { id: 1, title: 'React Lifecycle', body: 'React components go through phases like mounting, updating, and unmounting.' },
      { id: 2, title: 'Why use React?', body: 'React helps in building fast and interactive user interfaces with component reusability.' },
      { id: 3, title: 'What is JSX?', body: 'JSX stands for JavaScript XML. It allows writing HTML in React.' },
      { id: 4, title: 'Component vs Props', body: 'Components are reusable UI blocks. Props are how data is passed into them.' },
      { id: 5, title: 'React Hooks', body: 'Hooks like useState and useEffect let you use state and lifecycle in function components.' }
    ];
    this.setState({ posts: data });
  };


  componentDidMount() {
    this.loadPosts();
  }

  componentDidCatch(error, info) {
    alert('An error occurred: ' + error);
    console.error("Error info:", info);
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <h2>Something went wrong while loading posts.</h2>;
    }

    return (
      <div>
        <h1>Blog Posts</h1>
        {this.state.posts.map(post => (
          <Post key={post.id} title={post.title} body={post.body} />
        ))}
      </div>
    );
  }
}

export default Posts;