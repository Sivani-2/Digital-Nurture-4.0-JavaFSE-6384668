function BlogDetails(props) {
  return (
    <div>
      <h2>📝 Blog Details</h2>
      <ul>
        {props.blogs.map((blog) => (
          <div key={blog.id}>
            <h3>{blog.title}</h3>
            <h4>{blog.author}</h4>
            <p>{blog.content}</p>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default BlogDetails;