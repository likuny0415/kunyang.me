import { getAllPosts } from "../api/api";
import Head from "next/head";
import Article from "../../components/Article/article";
import { useRouter } from "next/router";

export default function TagPage({ slug, posts }) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{slug}</title>
      </Head>

      <div className="container">
        <button
          className="p-1 btn-sm btn btn-primary rounded"
          type="button"
          onClick={() => router.back()}
        >
          Go back
        </button>
        <h2 className="text-center mt-3">Tags: {slug}</h2>
        <Article posts={posts} lang={"zh"} />
      </div>
    </>
  );
}

export const getStaticProps = async ({ params }) => {
  const { slug } = params;
  const posts = getAllPosts().filter((post) => post.meta.tags.includes(slug));

  return {
    props: {
      slug,
      posts: posts.map((post) => post.meta),
    },
  };
};

export const getStaticPaths = async () => {
  const posts = getAllPosts();
  const tags = new Set(posts.map((post) => post.meta.tags).flat());
  const paths = Array.from(tags).map((tag) => ({ params: { slug: tag } }));

  return {
    paths,
    fallback: false,
  };
};
