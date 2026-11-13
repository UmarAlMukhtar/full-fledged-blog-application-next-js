import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import { PostSearch } from "@/components/post-search";
import { getPosts } from "@/lib/posts";

export const dynamic = "force-dynamic";

export default async function Home() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({ queryKey: ["posts"], queryFn: getPosts });

  return (
    <main className="page-wrap">
      <section className="intro" aria-labelledby="page-title">
        <p className="eyebrow">Issue No. 01 <span>·</span> November 2026</p>
        <h1 id="page-title">A little room<br /><em>to think.</em></h1>
        <p className="intro-copy">Essays and observations for a more thoughtful everyday. Come in, take your time.</p>
      </section>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <PostSearch />
      </HydrationBoundary>
    </main>
  );
}
