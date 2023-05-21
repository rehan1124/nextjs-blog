import Head from "next/head";
import Layout, { siteTitle } from "../components/Layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hello 👋🏻, I'm Rehan, an aspiring Blokchain Developer / Smart Contract
          Engineer. I have 10 years of experience in IT/QA 😲 and looking
          forward to jump 🏃🏻‍♂️ on train taking me towards BLOCKCHAIN 🚉.
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}
