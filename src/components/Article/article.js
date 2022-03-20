import Link from "next/link";
export default function Article({ posts }) {
  return (
    <>
      <div className="container">
        <div className="card m border-0 ">
          {posts.map((post) => (
            <div className="card-body " key={post.excerpt}>
              <Link href={`/posts/${post.slug}`}>
                <a className="text-decoration-none h5 mb-2">{post.title}</a>
              </Link>
              <p className="card-text">{post.excerpt}</p>
              {post.tags.map((tag) => (
                <Link href={`/tags/${tag}`} key={tag}>
                  <a className="text-decoration-none bg-light badge rounded-pill text-dark">
                    {tag}
                  </a>
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
