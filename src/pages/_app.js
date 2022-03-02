import Head from "next/head";
import "bootstrap/dist/css/bootstrap.css";
import { useEffect } from "react";
import Layout from "../components/Layout/Layout";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    typeof document !== undefined
      ? require("bootstrap/dist/js/bootstrap")
      : null;
  }, []);

  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
