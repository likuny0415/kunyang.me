export default function Article({ posts }) {
  return (
    <>
      <div className="container">
        <div className="card m border-0 ">
          {posts.map((post) => (
            <div className="card-body " key={post.excerpt}>
              <a
                href={`/posts/${post.slug}`}
                className="text-decoration-none h5 mb-2"
              >
                {post.title}
              </a>
              <p className="card-text">{post.excerpt}</p>
              {post.tags.map((tag) => (
                <a
                  key={tag}
                  className="text-decoration-none bg-light badge rounded-pill text-dark"
                  href={`/tags/${tag}`}
                >
                  {tag}
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
