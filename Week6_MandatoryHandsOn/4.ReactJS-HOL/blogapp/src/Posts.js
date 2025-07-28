import React from 'react';


class Posts extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      posts: [] 
    };
  }

  loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => this.setState({ posts: data })) 
      .catch(error => {
        console.error("Error fetching posts:", error);
      });
  }

 
  componentDidMount() {
    this.loadPosts();
  }

  
  componentDidCatch(error, info) {
    alert("An error occurred in a child component: " + error.message);
    console.error({ error, info });
  }

  render() {
    return (
      <div>
        <h1>Posts</h1>
        {this.state.posts.map(post => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <hr />
          </div>
        ))}
      </div>
    );
  }
}

export default Posts;