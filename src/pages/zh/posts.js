import Article from "../../components/Article/article";
import Titlt from "../../components/Homepage/title";
import { getAllPosts } from "../api/api";

export default function Posts({ posts }) {
  return (
    <>
      <Titlt landing={"zh_posts"} />
      <Article posts={posts} lang={"zh"} />
    </>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts().map((post) => post.meta);

  return { props: { posts } };
}
