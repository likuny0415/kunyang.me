import Article from "../../components/Article/article";
import Titlt from "../../components/Homepage/title";
import { getAllPosts } from "../api/api";

export default function Posts({ posts }) {
  return (
    <>
      <Titlt landing={"en_posts"} />
      <h2 className="text-center mt-3">Posts</h2>
      <Article posts={posts} lang={"en"} />
    </>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts().map((post) => post.meta);

  return { props: { posts } };
}
