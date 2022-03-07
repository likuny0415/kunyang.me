import Link from "next/link";
export default function Article({ posts }) {
  return (
    <>
      <ul>
        {posts.map((post) => (
          <li key={post.title}>
            <div>
              <Link href="google.com">123123</Link>
            </div>
            <p>{post.excerpt}</p>
            <p>
              {post.tags.map((tag) => (
                <Link href="google.com" key={tag}>
                  {tag}
                </Link>
              ))}
            </p>
          </li>
        ))}
      </ul>
    </>
  );
}
