import Head from "next/head";
import titleInfo from "../../data/title.json";

export default function Titlt(props) {
  const whichPage = props.landing;
  const info = titleInfo[whichPage];
  return (
    <>
      <Head>
        <title>{info}</title>
        <link rel="icon" href="/logo.jpeg" />
      </Head>
    </>
  );
}
