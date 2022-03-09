import Head from "next/head";
import Image from "next/image";
import { getPostFromSlug, getSlugs } from "../api/api";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/atom-one-light.css";
import YouTube from "../../components/Article/youtube";
import { useRouter } from "next/router";

export default function PostPage({ post }) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{post.meta.title}</title>
      </Head>

      <div className="container">
        <button
          className="btn-sm btn btn-primary rounded"
          type="button"
          onClick={() => router.back()}
        >
          Go back
        </button>
        <h1 className="text-center mt-3">{post.meta.title}</h1>
        <MDXRemote {...post.source} components={{ YouTube, Image }} />
      </div>
    </>
  );
}

export const getStaticProps = async ({ params }) => {
  const { slug } = params;
  const { content, meta } = getPostFromSlug(slug);
  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [
        rehypeSlug,
        [rehypeAutolinkHeadings, { behavior: "wrap" }],
        rehypeHighlight,
      ],
    },
  });

  return { props: { post: { source: mdxSource, meta } } };
};

export const getStaticPaths = async () => {
  const paths = getSlugs().map((slug) => ({ params: { slug } }));
  return {
    paths,
    fallback: false,
  };
};
