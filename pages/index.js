import Head from "next/head";
import Header from "@components/Header";
import { getSession } from "next-auth/react";
import Login from "@components/Login";
import Sidebar from "@components/Sidebar";
import Feed from "@components/Feed";
import Widgets from "@components/Widgets";
import { db } from "../firebase";

export default function Home({ session, posts }) {
  if (!session) return <Login />;

  return (
    <div className="h-screen overflow-hidden bg-gray-100">
      <Head>
        <title>AdheCode | Facebook</title>
        <meta name="description" content="Facebook by AdheCode" />
        <link rel="icon" href="/facebook.ico" />
      </Head>
      {/* Header */}
      <Header />
      <main className="flex">
        {/* Sidebar */}
        <Sidebar />
        {/* Feed */}
        <Feed posts={posts} />
        {/* Widgets */}
        <Widgets />
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  // Get the user
  const session = await getSession(context);
  const posts = await db.collection("posts").orderBy("timestamp", "desc").get();
  const docs = posts.docs.map((post) => ({
    id: post.id,
    ...post.data(),
    timestamp: null,
  }));
  return {
    props: { posts: docs, session },
  };
}
