import Article from "../../components/Article/article";
import Titlt from "../../components/Homepage/title";
import { getAllPosts } from "../api/api";

export default function Posts({ posts }) {
  return (
    <>
      <Titlt landing={"zh_posts"} />
      <h2 className="text-center mt-3">文章</h2>
      <Article posts={posts} />
    </>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts().map((post) => post.meta);

  return { props: { posts } };
}
