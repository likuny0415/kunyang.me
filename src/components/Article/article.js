export default function Article({ posts, lang }) {
  let title;
  if (lang == "zh") {
    title = "文章";
  } else {
    title = "Posts";
  }
  return (
    <>
      <h2 className="text-center mt-3">{title}</h2>

      <div className="card border-0 mt-3">
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
    </>
  );
}
