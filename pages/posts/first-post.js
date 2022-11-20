import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Layout from "../../components/Layout";

export default function FirstPost() {
  return (
    <Layout>
    <Head>
      <title> First Post</title>
    </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/"> Back to Home </Link>
      </h2>
      <Image
          src="/images/profile.jpg"
          height={400}
          width={400}
          alt="profile photo"
        />
    </Layout>
  );
}
